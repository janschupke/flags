import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, UI } from '../../constants';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${COLORS.gradient.background};
    color: ${COLORS.text.primary};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    color: ${COLORS.primary.lightBlue};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }
  a:hover {
    color: ${COLORS.primary.darkBlue};
  }
`;

export const Card = styled.div`
  background: ${COLORS.background.primary};
  border-radius: ${UI.borderRadius.large};
  border: 2px solid ${COLORS.border.primary};
  box-shadow: ${UI.shadows.small};
`;

export const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${COLORS.gradient.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${UI.spacing.md};
`;

export const Container = styled.div`
  background: white;
  border-radius: ${UI.borderRadius.xlarge};
  box-shadow: ${UI.shadows.large};
  padding: 32px 32px 28px 32px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 800;
  color: ${COLORS.text.primary};
  margin-bottom: 10px;
  background: ${COLORS.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  color: ${COLORS.text.secondary};
  font-size: 1.08rem;
  margin-bottom: 28px;
  font-weight: 400;
`;

export const Score = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${COLORS.text.primary};
  background: ${COLORS.background.primary};
  padding: 16px 25px;
  border-radius: ${UI.borderRadius.medium};
  display: inline-block;
  border: 2px solid ${COLORS.border.primary};
  margin-bottom: 20px;
  margin-top: 18px;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${UI.spacing.sm};
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 12px 16px;
  border: 2px solid ${COLORS.border.primary};
  border-radius: ${UI.borderRadius.medium};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
  margin-bottom: 0;
  background: white;
  color: #2d3748;
  &::placeholder {
    color: ${COLORS.text.muted};
  }
  &:focus {
    border-color: ${COLORS.primary.blue};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const Button = styled.button`
  background: ${COLORS.gradient.primary};
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: ${UI.borderRadius.medium};
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

export const FlagsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 0;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const FlagSection = styled(Card)`
  padding: 20px;
  text-align: center;
  margin-bottom: 0;
`;

export const SectionHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 20px;
`;

export const FlagImg = styled.img`
  border-radius: ${UI.borderRadius.medium};
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  width: 100%;
  max-width: 300px;
  height: 160px;
  object-fit: cover;
  border: 2px solid ${COLORS.border.primary};
  margin-bottom: 0;
`;

export const FlagImgSpaced = styled(FlagImg)`
  margin-bottom: 20px;
`;

export const PlaceholderBox = styled.div`
  border-radius: ${UI.borderRadius.medium};
  box-shadow: ${UI.shadows.medium};
  width: 100%;
  max-width: 300px;
  height: 160px;
  border: 2px solid ${COLORS.border.primary};
  background: ${COLORS.background.placeholder};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.text.secondary};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
`;

export const Placeholder = styled(PlaceholderBox)``;

export const InfoSection = styled(Card)`
  padding: 20px;
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  min-height: 250px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  text-align: left;
  flex: 2;
`;

export const InfoItem = styled.div`
  background: ${COLORS.background.secondary};
  padding: 18px 14px 14px 14px;
  border-radius: ${UI.borderRadius.small};
  border: 1px solid ${COLORS.border.primary};
  box-shadow: ${UI.shadows.small};
  margin-bottom: 2px;
`;

export const InfoLabel = styled.span`
  display: block;
  color: ${COLORS.primary.lightBlue};
  font-weight: 700;
  font-size: 1.04rem;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
`;

export const InfoValue = styled.span`
  display: block;
  color: ${COLORS.text.secondary};
  font-weight: 500;
  font-size: 1.13rem;
  margin-top: 2px;
  word-break: break-word;
`;

export const ResultIndicator = styled.div<{ $correct?: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ $correct }) => ($correct ? COLORS.status.success.text : COLORS.status.error.text)};
  background: ${({ $correct }) => ($correct ? COLORS.status.success.background : COLORS.status.error.background)};
  border: 2px solid;
  border-color: ${({ $correct }) => ($correct ? COLORS.status.success.border : COLORS.status.error.border)};
  padding: 12px 25px;
  border-radius: ${UI.borderRadius.medium};
  display: inline-block;
  margin-top: 0;
  text-align: center;
`;

export const ResultIndicatorSpaced = styled(ResultIndicator)`
  margin-top: 18px;
`;

export const InfoCaption = styled.div`
  font-size: 1.18rem;
  font-weight: 700;
  color: ${COLORS.text.primary};
  margin-bottom: 14px;
  letter-spacing: 0.01em;
`;

export const InfoPlaceholder = styled(PlaceholderBox)`
  height: auto;
  max-width: 100%;
  box-shadow: none;
  border: none;
  background: none;
  font-style: italic;
  padding: 0;
`;

export const Footnote = styled.div`
  margin-top: 32px;
  font-size: 0.95rem;
  color: ${COLORS.text.secondary};
  text-align: center;
  opacity: 0.85;
`;

export const Disclaimer = styled.div`
  margin-top: 6px;
  color: ${COLORS.text.secondary};
  font-size: 0.98rem;
  font-weight: 400;
`;

export const InfoWrapper = styled.div`
  width: 100%;
`; 
 