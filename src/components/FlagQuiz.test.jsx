import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import FlagQuiz from './FlagQuiz';

// Mock random country selection to make test deterministic
vi.mock('../data', () => {
  return {
    countries: [
      { key: 'usa', name: 'United States of America', capital: 'Washington, D.C.', continent: 'North America', government: 'Republic', language: 'English', isoCode: 'us' }
    ]
  };
});

describe('FlagQuiz', () => {
  it('renders flag, input, and button', () => {
    render(<FlagQuiz />);
    expect(screen.getByAltText(/current flag/i)).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText(/enter country name/i)[0]).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /check answer/i })).toBeInTheDocument();
  });

  it('accepts any full word of the country name as correct', () => {
    render(<FlagQuiz />);
    const input = screen.getAllByPlaceholderText(/enter country name/i)[0];
    const button = screen.getByRole('button', { name: /check answer/i });
    fireEvent.change(input, { target: { value: 'america' } });
    fireEvent.click(button);
    expect(screen.getAllByText(/correct/i)[0]).toBeInTheDocument();
  });
}); 
