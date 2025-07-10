import React from 'react';
import {
  InfoSection,
  InfoCaption,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  InfoPlaceholder,
  InfoWrapper
} from '../styled/FlagQuiz.styles';
import { FlagInfoProps } from '../../types';
import { UI_TEXT } from '../../constants';

const FlagInfo: React.FC<FlagInfoProps> = ({ prev }) => {
  return (
    <InfoSection>
      <InfoWrapper>
      <InfoCaption>{UI_TEXT.previousCountryInfo}</InfoCaption>
      {prev ? (
        <InfoGrid>
          <InfoItem>
            <InfoLabel>{UI_TEXT.labels.name}</InfoLabel>
            <InfoValue>{prev.name || UI_TEXT.fallback}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{UI_TEXT.labels.capital}</InfoLabel>
            <InfoValue>{prev.capital || UI_TEXT.fallback}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{UI_TEXT.labels.continent}</InfoLabel>
            <InfoValue>{prev.continent || UI_TEXT.fallback}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{UI_TEXT.labels.government}</InfoLabel>
            <InfoValue>{prev.government || UI_TEXT.fallback}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{UI_TEXT.labels.language}</InfoLabel>
            <InfoValue>{prev.language || UI_TEXT.fallback}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{UI_TEXT.labels.yourAnswer}</InfoLabel>
            <InfoValue>{prev.user || UI_TEXT.fallback}</InfoValue>
          </InfoItem>
        </InfoGrid>
      ) : (
        <InfoPlaceholder>
          {UI_TEXT.placeholder.previousInfo}
        </InfoPlaceholder>
      )}
      </InfoWrapper>
    </InfoSection>
  );
};

export default FlagInfo; 
