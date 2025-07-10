import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useQuiz } from './useQuiz';

// Mock the utilities
vi.mock('../utils/flagUtils', () => ({
  getRandomCountry: vi.fn()
}));

vi.mock('../utils/utils', () => ({
  isAnswerCorrect: vi.fn()
}));

import { getRandomCountry } from '../utils/flagUtils';
import { isAnswerCorrect } from '../utils/utils';

const mockCountry1 = {
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

describe('useQuiz', () => {

  it('initializes with default values', () => {
    vi.clearAllMocks();
    (getRandomCountry as any).mockReturnValue(mockCountry1);
    (isAnswerCorrect as any).mockImplementation((input: string, name: string) => 
      name.toLowerCase().includes(input.toLowerCase())
    );
    
    const { result } = renderHook(() => useQuiz());
    
    expect(result.current.current).toEqual(mockCountry1);
    expect(result.current.input).toBe('');
    expect(result.current.score).toEqual({ correct: 0, total: 0 });
    expect(result.current.prev).toBeNull();
    expect(result.current.inputRef).toBeDefined();
  });

  it('updates input when setInput is called', () => {
    vi.clearAllMocks();
    (getRandomCountry as any).mockReturnValue(mockCountry1);
    (isAnswerCorrect as any).mockImplementation((input: string, name: string) => 
      name.toLowerCase().includes(input.toLowerCase())
    );
    
    const { result } = renderHook(() => useQuiz());
    
    act(() => {
      result.current.setInput('test');
    });
    
    expect(result.current.input).toBe('test');
  });

  it('handles correct answer', async () => {
    vi.clearAllMocks();
    (getRandomCountry as any)
      .mockReturnValueOnce(mockCountry1) // Initial country
      .mockReturnValueOnce(mockCountry2) // Next country after answer
      .mockReturnValueOnce(mockCountry2) // Additional calls
      .mockReturnValueOnce(mockCountry2); // Additional calls
    (isAnswerCorrect as any).mockImplementation((input: string, name: string) => 
      name.toLowerCase().includes(input.toLowerCase())
    );
    
    const { result } = renderHook(() => useQuiz());
    
    // Verify initial state
    expect(result.current.current).toEqual(mockCountry1);
    
    act(() => {
      result.current.setInput('finland');
    });
    act(() => {
      result.current.handleCheck();
    });
    
    // Wait for state update
    await waitFor(() => {
      expect(result.current.current).toEqual(mockCountry2);
    });
    expect(result.current.score).toEqual({ correct: 1, total: 1 });
    expect(result.current.prev).toEqual({
      ...mockCountry1,
      user: 'finland',
      isCorrect: true
    });
    expect(result.current.input).toBe('');
  });

  it('handles incorrect answer', () => {
    vi.clearAllMocks();
    (getRandomCountry as any)
      .mockReturnValueOnce(mockCountry1) // Initial country
      .mockReturnValueOnce(mockCountry2); // Next country after answer
    (isAnswerCorrect as any).mockReturnValueOnce(false);
    
    const { result } = renderHook(() => useQuiz());
    
    act(() => {
      result.current.setInput('wrong');
    });
    act(() => {
      result.current.handleCheck();
    });
    
    expect(result.current.score).toEqual({ correct: 0, total: 1 });
    expect(result.current.prev).toEqual({
      ...mockCountry1,
      user: 'wrong',
      isCorrect: false
    });
  });

  it('calls getRandomCountry when moving to next question', () => {
    vi.clearAllMocks();
    (getRandomCountry as any)
      .mockReturnValueOnce(mockCountry1) // Initial country
      .mockReturnValueOnce(mockCountry2); // Next country after answer
    (isAnswerCorrect as any).mockImplementation((input: string, name: string) => 
      name.toLowerCase().includes(input.toLowerCase())
    );
    
    const { result } = renderHook(() => useQuiz());
    
    act(() => {
      result.current.handleCheck();
    });
    
    expect(getRandomCountry).toHaveBeenCalledTimes(3); // Once for initial, once for next, and one more for re-render
  });
}); 
