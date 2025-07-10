export interface Country {
  key: string;
  name: string;
  capital: string;
  continent: string;
  government: string;
  language: string;
  isoCode: string;
  user?: string;
  isCorrect?: boolean;
}

export interface Score {
  correct: number;
  total: number;
}

export interface QuizInputProps {
  input: string;
  setInput: (val: string) => void;
  handleCheck: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export interface FlagDisplayProps {
  current: Country;
  prev: Country | null;
  score: Score;
}

export interface FlagInfoProps {
  prev: {
    name?: string;
    capital?: string;
    continent?: string;
    government?: string;
    language?: string;
    user?: string;
    isCorrect?: boolean;
  } | null;
} 
