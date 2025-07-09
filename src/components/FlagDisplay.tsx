import React from 'react';
import {
  FlagsRow,
  FlagSection,
  SectionHeader,
  FlagImg,
  Placeholder,
  Score,
  ResultIndicator,
  FlagImgSpaced,
  ResultIndicatorSpaced
} from './styled/FlagQuiz.styles';
import { getFlagUrl } from '../utils/flagUtils';

interface Country {
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

interface Score {
  correct: number;
  total: number;
}

interface FlagDisplayProps {
  current: Country;
  prev: Country | null;
  score: Score;
}

const FlagDisplay: React.FC<FlagDisplayProps> = ({ current, prev, score }) => {
  const flagSrc = current.isoCode ? getFlagUrl(current.isoCode) : '';
  return (
    <FlagsRow>
      <FlagSection>
        <SectionHeader>Current Flag</SectionHeader>
        <FlagImgSpaced src={flagSrc} alt="Current flag" />
        <Score>Your Score: {score.correct} / {score.total}</Score>
      </FlagSection>
      <FlagSection>
        <SectionHeader>Previous Flag</SectionHeader>
        {prev ? (
          <>
            <FlagImgSpaced src={prev.isoCode ? getFlagUrl(prev.isoCode) : ''} alt="Previous flag" />
            <ResultIndicatorSpaced $correct={prev.isCorrect}>
              {prev.isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </ResultIndicatorSpaced>
          </>
        ) : (
          <Placeholder>
            Your previous answer will appear here after your first guess.
          </Placeholder>
        )}
      </FlagSection>
    </FlagsRow>
  );
};

export default FlagDisplay; 
 