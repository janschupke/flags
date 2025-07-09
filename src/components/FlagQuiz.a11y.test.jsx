import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe, toHaveNoViolations } from 'vitest-axe';
import FlagQuiz from './FlagQuiz';

expect.extend(toHaveNoViolations);

describe('FlagQuiz accessibility', () => {
  it('has no a11y violations', async () => {
    const { container } = render(<FlagQuiz />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 
