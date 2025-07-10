import React from 'react';
import { CONTACT, UI_TEXT } from '../constants';
import { useQuiz } from '../hooks/useQuiz';
import {
  Page,
  Container,
  Title,
  Subtitle,
  Footnote,
  Disclaimer
} from './styled/FlagQuiz.styles';
import QuizInput from './ui/QuizInput';
import FlagDisplay from './features/FlagDisplay';
import FlagInfo from './features/FlagInfo';

function Footer() {
  return (
    <Footnote>
      <div>Created by Jan Schupke &lt;<a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>&gt;</div>
      <Disclaimer>
        <b>Disclaimer:</b> {CONTACT.disclaimer}
      </Disclaimer>
    </Footnote>
  );
}

export default function FlagQuiz() {
  const {
    current,
    input,
    score,
    prev,
    inputRef,
    setInput,
    handleCheck,
  } = useQuiz();

  return (
    <Page>
      <Container>
        <Title>{UI_TEXT.title}</Title>
        <Subtitle>{UI_TEXT.subtitle}</Subtitle>
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
        <Footer />
      </Container>
    </Page>
  );
} 
 