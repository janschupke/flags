import React from 'react';
import {
  InputColumn,
  Input,
  Button
} from './styled/FlagQuiz.styles';

const QuizInput = ({ input, setInput, handleCheck, inputRef }) => {
  return (
    <InputColumn>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Enter country name..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleCheck()}
        autoFocus
      />
      <Button onClick={handleCheck}>Check Answer</Button>
    </InputColumn>
  );
};

export default QuizInput; 
