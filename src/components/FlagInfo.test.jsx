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
    render(<FlagInfo prev={{
      name: 'Finland',
      capital: 'Helsinki',
      continent: 'Europe',
      government: 'Parliamentary republic',
      language: 'Finnish, Swedish',
      user: 'fin',
      isCorrect: true
    }} />);
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
      el.textContent === 'fin' || el.textContent.includes('fin')
    );
    expect(userAnswerElement).toBeTruthy();
  });

  it('shows N/A for missing fields', () => {
    render(<FlagInfo prev={{ name: '', capital: '', continent: '', government: '', language: '', user: '', isCorrect: undefined }} />);
    expect(screen.getAllByText('N/A').length).toBeGreaterThan(2);
  });

  it('handles special characters', () => {
    render(<FlagInfo prev={{ name: "Côte d'Ivoire", capital: "Yamoussoukro", continent: "Africa", government: "Presidential republic", language: "French", user: "côte", isCorrect: false }} />);
    // There are two elements with 'côte', so use getAllByText and check both
    const matches = screen.getAllByText(/côte/i);
    expect(matches.length).toBeGreaterThan(1);
    expect(matches[0].textContent.toLowerCase()).toContain("côte");
    expect(matches[1].textContent.toLowerCase()).toContain("côte");
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<FlagInfo prev={{
      name: 'Finland',
      capital: 'Helsinki',
      continent: 'Europe',
      government: 'Parliamentary republic',
      language: 'Finnish, Swedish',
      user: 'fin',
      isCorrect: true
    }} />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 
