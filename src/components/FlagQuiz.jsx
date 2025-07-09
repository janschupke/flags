import React, { useState, useRef, useEffect } from 'react';
import { isAnswerCorrect } from '../utils';
import { getRandomCountry } from '../utils/flagUtils';
import {
  Page,
  Container,
  Title,
  Subtitle,
  Footnote
} from './styled/FlagQuiz.styles';
import QuizInput from './QuizInput';
import FlagDisplay from './FlagDisplay';
import FlagInfo from './FlagInfo';

export default function FlagQuiz() {
  const [current, setCurrent] = useState(getRandomCountry());
  const [input, setInput] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [prev, setPrev] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [current]);

  const handleCheck = () => {
    const isCorrect = isAnswerCorrect(input, current.name);
    setScore(s => ({
      correct: s.correct + (isCorrect ? 1 : 0),
      total: s.total + 1
    }));
    setPrev({ ...current, user: input, isCorrect });
    setCurrent(getRandomCountry());
    setInput('');
  };

  return (
    <Page>
      <Container>
        <Title>Flags Quiz</Title>
        <Subtitle>Test your knowledge of world flags and learn about countries</Subtitle>
        
        <QuizInput 
          input={input}
          setInput={setInput}
          handleCheck={handleCheck}
          inputRef={inputRef}
        />
        
        <FlagDisplay 
          current={current}
          prev={prev}
          score={score}
        />
        
        <FlagInfo prev={prev} />
        
        <Footnote>
          <div>Created by Jan Schupke &lt;<a href="mailto:jan@schupke.io">jan@schupke.io</a>&gt;</div>
          <div style={{ marginTop: 6 }}>
            <b>Disclaimer:</b> Some flags or information may be outdated or incorrect.
          </div>
        </Footnote>
      </Container>
    </Page>
  );
} 
