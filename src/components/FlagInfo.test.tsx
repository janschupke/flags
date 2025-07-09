import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FlagInfo from './FlagInfo';

describe('FlagInfo', () => {
  it('shows placeholders for previous info on first render', () => {
    render(<FlagInfo prev={null} />);
    expect(screen.getByText(/no previous flag information yet/i)).toBeInTheDocument();
  });

  it('populates info after answer', () => {
    const prev = {
      name: 'Finland',
      capital: 'Helsinki',
      continent: 'Europe',
      government: 'Parliamentary republic',
      language: 'Finnish, Swedish',
      user: 'fin',
      isCorrect: true
    };
    render(<FlagInfo prev={prev} />);
    expect(screen.getByText(/finland/i)).toBeInTheDocument();
    expect(screen.getByText(/helsinki/i)).toBeInTheDocument();
    expect(screen.getByText(/europe/i)).toBeInTheDocument();
    expect(screen.getByText(/parliamentary republic/i)).toBeInTheDocument();
    expect(screen.getByText(/finnish, swedish/i)).toBeInTheDocument();
    // Use a more specific query for the user answer
    const userAnswerElements = screen.getAllByText(/fin/i);
    expect(userAnswerElements.length).toBeGreaterThan(0);
    // Check that one of them is the user answer
    const userAnswerElement = userAnswerElements.find(el => 
      el.textContent === 'fin' || el.textContent?.includes('fin')
    );
    expect(userAnswerElement).toBeTruthy();
  });

  it('shows N/A for missing fields', () => {
    const prev = { name: '', capital: '', continent: '', government: '', language: '', user: '', isCorrect: undefined };
    render(<FlagInfo prev={prev} />);
    expect(screen.getAllByText('N/A').length).toBeGreaterThan(2);
  });

  it('handles special characters', () => {
    const prev = { name: "C 4te d'Ivoire", capital: "Yamoussoukro", continent: "Africa", government: "Presidential republic", language: "French", user: "c 4te", isCorrect: false };
    render(<FlagInfo prev={prev} />);
    // There are two elements with 'c 4te', so use getAllByText and check both
    const matches = screen.getAllByText(/c 4te/i);
    expect(matches.length).toBeGreaterThan(1);
    expect(matches[0].textContent?.toLowerCase()).toContain("c 4te");
    expect(matches[1].textContent?.toLowerCase()).toContain("c 4te");
  });

  it('matches snapshot', () => {
    const prev = {
      name: 'Finland',
      capital: 'Helsinki',
      continent: 'Europe',
      government: 'Parliamentary republic',
      language: 'Finnish, Swedish',
      user: 'fin',
      isCorrect: true
    };
    const { asFragment } = render(<FlagInfo prev={prev} />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 
