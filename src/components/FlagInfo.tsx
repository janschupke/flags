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
} from './styled/FlagQuiz.styles';

interface FlagInfoProps {
  prev: {
    name?: string;
    capital?: string;
    continent?: string;
    government?: string;
    language?: string;
    user?: string;
    isCorrect?: boolean;
  } | null;
}

const FlagInfo: React.FC<FlagInfoProps> = ({ prev }) => {
  return (
    <InfoSection>
      <InfoWrapper>
      <InfoCaption>Previous Country Information</InfoCaption>
      {prev ? (
        <InfoGrid>
          <InfoItem>
            <InfoLabel>Name:</InfoLabel>
            <InfoValue>{prev.name || 'Not available'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Capital:</InfoLabel>
            <InfoValue>{prev.capital || 'Not available'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Continent:</InfoLabel>
            <InfoValue>{prev.continent || 'Not available'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Government:</InfoLabel>
            <InfoValue>{prev.government || 'Not available'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Language:</InfoLabel>
            <InfoValue>{prev.language || 'Not available'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Your Answer:</InfoLabel>
            <InfoValue>{prev.user || 'Not available'}</InfoValue>
          </InfoItem>
        </InfoGrid>
      ) : (
        <InfoPlaceholder>
          No previous flag information yet.<br />Submit your first answer to see details here.
        </InfoPlaceholder>
      )}
      </InfoWrapper>
    </InfoSection>
  );
};

export default FlagInfo; 
