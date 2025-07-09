import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'vitest-axe';
import FlagQuiz from './FlagQuiz';

// Add this to fix the matcher type error
declare module 'vitest' {
  interface Assertion<T = any> {
    toHaveNoViolations(): void;
  }
}

// Mock getRandomCountry to always return a valid country
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

describe('FlagQuiz accessibility', () => {
  it('has no a11y violations', async () => {
    const { container } = render(<FlagQuiz />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 
 