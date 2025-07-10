import { useState, useRef, useEffect } from 'react';
import { getRandomCountry } from '../utils/flagUtils';
import { isAnswerCorrect } from '../utils/utils';
import { Country } from '../types';

export interface UseQuizReturn {
  current: Country;
  input: string;
  score: { correct: number; total: number };
  prev: (Country & { user?: string; isCorrect?: boolean }) | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  setInput: (val: string) => void;
  handleCheck: () => void;
}

export function useQuiz(): UseQuizReturn {
  const [current, setCurrent] = useState<Country>(getRandomCountry());
  const [input, setInput] = useState('');
  const [score, setScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [prev, setPrev] = useState<(Country & { user?: string; isCorrect?: boolean }) | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [current]);

  const handleCheck = () => {
    const isCorrect = isAnswerCorrect(input, current.name);
    const currentCountry = { ...current }; // Create a copy of current
    const userInput = input; // Capture input before clearing
    
    // Set prev first, before changing current
    setPrev({ ...currentCountry, user: userInput, isCorrect });
    
    // Then update score and current
    setScore(s => ({
      correct: s.correct + (isCorrect ? 1 : 0),
      total: s.total + 1
    }));
    setCurrent(getRandomCountry());
    setInput('');
  };

  return {
    current,
    input,
    score,
    prev,
    inputRef,
    setInput,
    handleCheck,
  };
} 
