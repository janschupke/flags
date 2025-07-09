import React from 'react';
import {
  FlagsRow,
  FlagSection,
  SectionHeader,
  FlagImg,
  Placeholder,
  Score,
  ResultIndicator
} from './styled/FlagQuiz.styles';
import { getFlagUrl } from '../utils/flagUtils';

const FlagDisplay = ({ current, prev, score }) => {
  return (
    <FlagsRow>
      <FlagSection>
        <SectionHeader>Current Flag</SectionHeader>
        <FlagImg src={getFlagUrl(current.isoCode)} alt="Current flag" />
        <Score>Score: {score.correct} of {score.total}</Score>
      </FlagSection>
      <FlagSection>
        <SectionHeader>Previous Flag</SectionHeader>
        {prev ? (
          <>
            <FlagImg src={getFlagUrl(prev.isoCode)} alt="Previous flag" />
            <ResultIndicator $correct={prev.isCorrect}>
              {prev.isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </ResultIndicator>
          </>
        ) : (
          <Placeholder>
            No previous flag yet. Submit your first answer to see details here.
          </Placeholder>
        )}
      </FlagSection>
    </FlagsRow>
  );
};

export default FlagDisplay; 
