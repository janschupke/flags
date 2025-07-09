import React from 'react';
import {
  InfoSection,
  InfoCaption,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  InfoPlaceholder
} from './styled/FlagQuiz.styles';

const FlagInfo = ({ prev }) => {
  return (
    <InfoSection>
      <div style={{ width: '100%' }}>
        <InfoCaption>Previous Flag Information</InfoCaption>
        {prev ? (
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Country:</InfoLabel> <InfoValue>{prev.name || 'N/A'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Capital:</InfoLabel> <InfoValue>{prev.capital || 'N/A'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Continent:</InfoLabel> <InfoValue>{prev.continent || 'N/A'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Government:</InfoLabel> <InfoValue>{prev.government || 'N/A'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Languages:</InfoLabel> <InfoValue>{prev.language || 'N/A'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Your Answer:</InfoLabel> <InfoValue>{prev.user || 'N/A'}</InfoValue>
            </InfoItem>
          </InfoGrid>
        ) : (
          <InfoPlaceholder>
            No previous flag information yet.<br />Submit your first answer to see details here.
          </InfoPlaceholder>
        )}
      </div>
    </InfoSection>
  );
};

export default FlagInfo; 
