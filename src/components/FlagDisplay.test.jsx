import React from 'react';
import { render, screen } from '@testing-library/react';
import FlagDisplay from './FlagDisplay';

// Partial mock for getRandomCountry, but use real getFlagUrl
vi.mock('../utils/flagUtils', async () => {
  const actual = await vi.importActual('../utils/flagUtils');
  return {
    ...actual,
    getRandomCountry: () => ({
      key: 'finland',
      name: 'Finland',
      capital: 'Helsinki',
      continent: 'Europe',
      government: 'Parliamentary republic',
      language: 'Finnish, Swedish',
      isoCode: 'fi',
    })
  };
});

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

describe('FlagDisplay', () => {
  it('shows placeholders for previous flag on first render', () => {
    render(<FlagDisplay current={mockCountry} prev={null} score={{ correct: 0, total: 0 }} />);
    expect(screen.getByText(/no previous flag yet/i)).toBeInTheDocument();
    expect(screen.getByAltText(/current flag/i)).toBeInTheDocument();
    expect(screen.getByText(/score/i)).toBeInTheDocument();
  });

  it('shows correct/incorrect infobox after answer', () => {
    render(
      <FlagDisplay
        current={mockCountry2}
        prev={{ ...mockCountry, isCorrect: true }}
        score={{ correct: 1, total: 1 }}
      />
    );
    expect(screen.getByText(/✓ correct!/i)).toBeInTheDocument();
    render(
      <FlagDisplay
        current={mockCountry2}
        prev={{ ...mockCountry, isCorrect: false }}
        score={{ correct: 0, total: 1 }}
      />
    );
    expect(screen.getByText(/✗ incorrect/i)).toBeInTheDocument();
  });

  it('handles missing isoCode gracefully', () => {
    render(
      <FlagDisplay
        current={{ ...mockCountry, isoCode: undefined }}
        prev={null}
        score={{ correct: 0, total: 0 }}
      />
    );
    expect(screen.getByAltText(/current flag/i)).toBeInTheDocument();
  });

  it('handles large score numbers', () => {
    render(
      <FlagDisplay
        current={mockCountry}
        prev={null}
        score={{ correct: 1234, total: 5678 }}
      />
    );
    expect(screen.getByText(/1234/)).toBeInTheDocument();
    expect(screen.getByText(/5678/)).toBeInTheDocument();
  });
}); 
