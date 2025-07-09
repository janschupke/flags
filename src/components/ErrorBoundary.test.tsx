import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe Child</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Safe Child')).toBeInTheDocument();
  });

  it('catches errors and displays fallback UI', () => {
    // Component that throws
    function ProblemChild(): JSX.Element {
      throw new Error('Test error');
    }
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
}); 
