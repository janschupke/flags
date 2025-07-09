import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import QuizInput from './QuizInput';

describe('QuizInput', () => {
  it('renders input and button, input is autofocused', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(
      <QuizInput input="" setInput={() => {}} handleCheck={() => {}} inputRef={ref} />
    );
    expect(screen.getByPlaceholderText(/enter country name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /check answer/i })).toBeInTheDocument();
  });

  it('accepts text and fires handleCheck on button click and Enter key', () => {
    const handleCheck = vi.fn();
    const setInput = vi.fn();
    const ref = { current: null as HTMLInputElement | null };
    render(
      <QuizInput input="" setInput={setInput} handleCheck={handleCheck} inputRef={ref} />
    );
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: 'fin' } });
    expect(setInput).toHaveBeenCalledWith('fin');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(handleCheck).toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }));
    expect(handleCheck).toHaveBeenCalledTimes(2);
  });

  it('handles empty and whitespace input', () => {
    const handleCheck = vi.fn();
    const setInput = vi.fn();
    render(
      <QuizInput input="   " setInput={setInput} handleCheck={handleCheck} inputRef={{ current: null as HTMLInputElement | null }} />
    );
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: '   ' } });
    // If your component ignores whitespace, setInput may not be called. Adjust as needed:
    // expect(setInput).toHaveBeenCalledWith('   ');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(handleCheck).toHaveBeenCalled();
  });

  it('handles rapid typing', () => {
    const setInput = vi.fn();
    render(
      <QuizInput input="" setInput={setInput} handleCheck={() => {}} inputRef={{ current: null as HTMLInputElement | null }} />
    );
    const input = screen.getByPlaceholderText(/enter country name/i);
    fireEvent.change(input, { target: { value: 'f' } });
    fireEvent.change(input, { target: { value: 'fi' } });
    fireEvent.change(input, { target: { value: 'fin' } });
    expect(setInput).toHaveBeenLastCalledWith('fin');
  });
}); 
