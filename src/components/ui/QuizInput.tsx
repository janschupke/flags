import React from 'react';
import {
  InputColumn,
  Input,
  Button
} from '../styled/FlagQuiz.styles';
import { GAME } from '../../constants';
import { QuizInputProps } from '../../types';

const QuizInput: React.FC<QuizInputProps> = ({ input, setInput, handleCheck, inputRef }) => {
  return (
    <InputColumn>
      <Input
        ref={inputRef}
        type="text"
        placeholder={GAME.inputPlaceholder}
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleCheck()}
        autoFocus
      />
      <Button onClick={handleCheck}>{GAME.buttonText}</Button>
    </InputColumn>
  );
};

export default QuizInput; 
 