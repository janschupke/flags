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
} from '../styled/FlagQuiz.styles';
import { getFlagUrl } from '../../utils/flagUtils';
import { FlagDisplayProps } from '../../types';
import { UI_TEXT, AnswerStatus } from '../../constants';

const FlagDisplay: React.FC<FlagDisplayProps> = ({ current, prev, score }) => {
  const flagSrc = current.isoCode ? getFlagUrl(current.isoCode) : '';
  return (
    <FlagsRow>
      <FlagSection>
        <SectionHeader>{UI_TEXT.currentFlag}</SectionHeader>
        <FlagImgSpaced src={flagSrc} alt="Current flag" />
        <Score>{UI_TEXT.score} {score.correct} / {score.total}</Score>
      </FlagSection>
      <FlagSection>
        <SectionHeader>{UI_TEXT.previousFlag}</SectionHeader>
        {prev ? (
          <>
            <FlagImgSpaced src={prev.isoCode ? getFlagUrl(prev.isoCode) : ''} alt="Previous flag" />
            <ResultIndicatorSpaced $correct={prev.isCorrect}>
              {prev.isCorrect ? AnswerStatus.CORRECT : AnswerStatus.INCORRECT}
            </ResultIndicatorSpaced>
          </>
        ) : (
          <Placeholder>
            {UI_TEXT.placeholder.previousFlag}
          </Placeholder>
        )}
      </FlagSection>
    </FlagsRow>
  );
};

export default FlagDisplay; 
 