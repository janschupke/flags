import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import FlagQuiz from './FlagQuiz';

// Partial mock for getRandomCountry, but use real getFlagUrl
vi.mock('../utils/flagUtils', async () => {
  const actual = await vi.importActual('../utils/flagUtils');
  return {
    ...actual,
    getRandomCountry: vi.fn()
  };
});
import { getRandomCountry } from '../utils/flagUtils';
vi.mock('../utils/utils', () => ({
  isAnswerCorrect: vi.fn()
}));
import { isAnswerCorrect } from '../utils/utils';

const mockCountry = {
  key: 'finland',
  name: 'Finland',
  capital: 'Helsinki',
  continent: 'Europe',
  government: 'Parliamentary republic',
  language: 'Finnish, Swedish',
  isoCode: 'fi',
};
const mockCountry2 = {
  key: 'sweden',
  name: 'Sweden',
  capital: 'Stockholm',
  continent: 'Europe',
  government: 'Constitutional monarchy',
  language: 'Swedish',
  isoCode: 'se',
};

describe('FlagQuiz (integration)', () => {
  beforeEach(() => {
    (getRandomCountry as any).mockReset();
    (isAnswerCorrect as any).mockReset();
    (getRandomCountry as any)
      .mockReturnValueOnce(mockCountry) // initial
      .mockReturnValueOnce(mockCountry2) // after answer
      .mockReturnValue(mockCountry2); // fallback
    (isAnswerCorrect as any).mockImplementation((input: string, name: string) => name.toLowerCase().includes(input.toLowerCase()));
  });

  it('input field is autofocused on page init', () => {
    render(<FlagQuiz />);
    const input = screen.getByPlaceholderText(/enter country name/i);
    expect(document.activeElement === input || (input as HTMLInputElement).autofocus).toBeTruthy();
  });

  it('accepts a substring, evaluates answer, updates UI', () => {
    render(<FlagQuiz />);
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: 'fin' } });
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
    expect(screen.getByText(/finland/i)).toBeInTheDocument();
    expect(screen.getByText(/helsinki/i)).toBeInTheDocument();
    expect(screen.getByText(/\u2713 correct!/i)).toBeInTheDocument();
  });

  it('shows incorrect infobox for wrong answer', () => {
    (isAnswerCorrect as any).mockReturnValueOnce(false);
    (getRandomCountry as any).mockReturnValueOnce(mockCountry).mockReturnValueOnce(mockCountry2);
    render(<FlagQuiz />);
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: 'sweden' } });
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
    expect(screen.getByText(/\u2717 incorrect/i)).toBeInTheDocument();
  });

  it('input is reset and refocused after answer', () => {
    render(<FlagQuiz />);
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: 'fin' } });
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
    const newInput = screen.getByPlaceholderText(/enter country name/i);
    expect((newInput as HTMLInputElement).value).toBe('');
    expect(document.activeElement === newInput || (newInput as HTMLInputElement).autofocus).toBeTruthy();
  });

  it('accepts answers case-insensitively and rapidly', () => {
    render(<FlagQuiz />);
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: 'FiNlAnD' } });
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
    expect(screen.getByText(/\u2713 correct!/i)).toBeInTheDocument();
    // Rapid answer
    fireEvent.change(input, { target: { value: 'SwEdEn' } });
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
    // Use a more specific query for the country name
    const swedenElements = screen.getAllByText(/sweden/i);
    expect(swedenElements.length).toBeGreaterThan(0);
    // Check that one of them is the country name (not the user input)
    const countryNameElement = swedenElements.find(el => 
      el.textContent === 'Sweden' || el.textContent?.toLowerCase() === 'sweden'
    );
    expect(countryNameElement).toBeTruthy();
  });
}); 
