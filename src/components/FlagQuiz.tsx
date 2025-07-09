import React, { useState, useRef, useEffect } from 'react';
import { isAnswerCorrect } from '../utils/utils';
import { getRandomCountry, Country } from '../utils/flagUtils';
import {
  Page,
  Container,
  Title,
  Subtitle,
  Footnote,
  Disclaimer
} from './styled/FlagQuiz.styles';
import QuizInput from './QuizInput';
import FlagDisplay from './FlagDisplay';
import FlagInfo from './FlagInfo';

export default function FlagQuiz() {
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
        <div style={{ marginBottom: 12, color: '#2563eb', fontWeight: 600, fontSize: '1.08rem' }}>
          Guess the country for the flag shown below.
        </div>
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
          <Disclaimer>
            <b>Disclaimer:</b> Some flags or information may be outdated or incorrect.
          </Disclaimer>
        </Footnote>
      </Container>
    </Page>
  );
} 
 