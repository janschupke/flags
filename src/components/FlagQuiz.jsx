import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { countries } from '../data';
import { isAnswerCorrect } from '../utils';

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #6b7280 0%, #374151 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Container = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 700px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: #718096;
  font-size: 1rem;
  margin-bottom: 25px;
  font-weight: 400;
`;

const Score = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  background: #f7fafc;
  padding: 12px 25px;
  border-radius: 10px;
  display: inline-block;
  border: 2px solid #e2e8f0;
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 250px;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
  margin-bottom: 0;
  background: white;
  color: #2d3748;
  &::placeholder {
    color: #a0aec0;
  }
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  margin-left: 8px;
  margin-bottom: 0;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const FlagsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 0;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const FlagSection = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 20px;
  border: 2px solid #e2e8f0;
  text-align: center;
  margin-bottom: 0;
`;

const SectionHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 20px;
`;

const FlagImg = styled.img`
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  height: 160px;
  object-fit: cover;
  border: 2px solid #e2e8f0;
  margin-bottom: 0;
`;

const Placeholder = styled.div`
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  height: 160px;
  border: 2px solid #e2e8f0;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
`;

const InfoSection = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 20px;
  border: 2px solid #e2e8f0;
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  min-height: 160px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  text-align: left;
  flex: 2;
`;

const InfoItem = styled.div`
  background: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const InfoLabel = styled.span`
  color: #2563eb;
  font-weight: 600;
`;

const InfoValue = styled.span`
  color: #64748b;
  font-weight: 500;
`;

const ResultIndicator = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => (props.$correct ? '#059669' : '#dc2626')};
  background: ${props => (props.$correct ? '#ecfdf5' : '#fef2f2')};
  border: 2px solid;
  border-color: ${props => (props.$correct ? '#10b981' : '#ef4444')};
  padding: 12px 25px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 0;
  text-align: center;
`;

const InfoCaption = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 10px;
`;

const InfoPlaceholder = styled.div`
  color: #718096;
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
  white-space: pre-line;
`;

const Footnote = styled.div`
  margin-top: 32px;
  font-size: 0.95rem;
  color: #64748b;
  text-align: center;
  opacity: 0.85;
`;

function getFlagUrl(isoCode) {
  return `https://flagcdn.com/${isoCode}.svg`;
}

function getRandomCountry() {
  return countries[Math.floor(Math.random() * countries.length)];
}

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
              <Placeholder>No previous flag yet. Submit your first answer to see details here.</Placeholder>
            )}
          </FlagSection>
        </FlagsRow>
        <InfoSection>
          <div style={{ width: '100%' }}>
            <InfoCaption>Previous Flag Information</InfoCaption>
            {prev ? (
              <InfoGrid>
                <InfoItem><InfoLabel>Country:</InfoLabel> <InfoValue>{prev.name || 'N/A'}</InfoValue></InfoItem>
                <InfoItem><InfoLabel>Capital:</InfoLabel> <InfoValue>{prev.capital || 'N/A'}</InfoValue></InfoItem>
                <InfoItem><InfoLabel>Continent:</InfoLabel> <InfoValue>{prev.continent || 'N/A'}</InfoValue></InfoItem>
                <InfoItem><InfoLabel>Government:</InfoLabel> <InfoValue>{prev.government || 'N/A'}</InfoValue></InfoItem>
                <InfoItem><InfoLabel>Languages:</InfoLabel> <InfoValue>{prev.language || 'N/A'}</InfoValue></InfoItem>
                <InfoItem><InfoLabel>Your Answer:</InfoLabel> <InfoValue>{prev.user || 'N/A'}</InfoValue></InfoItem>
                <InfoItem><InfoLabel>Result:</InfoLabel> <InfoValue>{typeof prev.isCorrect === 'boolean' ? (prev.isCorrect ? 'Correct' : 'Incorrect') : 'N/A'}</InfoValue></InfoItem>
              </InfoGrid>
            ) : (
              <InfoPlaceholder>No previous flag information yet.\nSubmit your first answer to see details here.</InfoPlaceholder>
            )}
          </div>
        </InfoSection>
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
