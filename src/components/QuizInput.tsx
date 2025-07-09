import React from 'react';
import {
  InputColumn,
  Input,
  Button
} from './styled/FlagQuiz.styles';

interface QuizInputProps {
  input: string;
  setInput: (val: string) => void;
  handleCheck: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const QuizInput: React.FC<QuizInputProps> = ({ input, setInput, handleCheck, inputRef }) => {
  return (
    <InputColumn>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Enter country name..."
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleCheck()}
        autoFocus
      />
      <Button onClick={handleCheck}>Check Answer</Button>
    </InputColumn>
  );
};

export default QuizInput; 
 