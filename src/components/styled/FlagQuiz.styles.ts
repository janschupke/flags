import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #6b7280 0%, #374151 100%);
    color: #1e293b;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }
  a:hover {
    color: #1d4ed8;
  }
`;

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 0 0 0;
`;

export const Container = styled.div`
  background: white;
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(30,41,59,0.10);
  padding: 32px 32px 24px 32px;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #2563eb;
`;

export const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 24px 0;
  color: #64748b;
`;

export const Footnote = styled.div`
  margin-top: 32px;
  font-size: 0.95rem;
  color: #64748b;
  text-align: center;
`;

export const Disclaimer = styled.div`
  margin-top: 8px;
  font-size: 0.9rem;
  color: #dc2626;
`;

export const FlagsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: 32px 0 0 0;
  align-items: flex-start;
  justify-content: center;
`;

export const FlagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
`;

export const SectionHeader = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 8px;
`;

export const FlagImg = styled.img`
  width: 120px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  background: #f1f5f9;
  margin-bottom: 8px;
`;

export const FlagImgSpaced = styled(FlagImg)`
  margin-bottom: 16px;
`;

export const Placeholder = styled.div`
  color: #64748b;
  font-size: 0.98rem;
  text-align: center;
  margin-top: 16px;
`;

export const Score = styled.div`
  margin-top: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
`;

export const ResultIndicator = styled.div<{ $correct?: boolean }>`
  margin-top: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $correct }) => ($correct ? '#16a34a' : '#dc2626')};
`;

export const ResultIndicatorSpaced = styled.div<{ $correct?: boolean }>`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ $correct }) => ($correct ? '#16a34a' : '#dc2626')};
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 24px 0 0 0;
  width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 1.1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
  }
`;

export const InfoSection = styled.div`
  margin-top: 32px;
  width: 100%;
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px 18px 18px 18px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const InfoCaption = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 12px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 18px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const InfoLabel = styled.span`
  font-weight: 700;
  color: #2563eb;
  margin-right: 6px;
`;

export const InfoValue = styled.span`
  color: #64748b;
  font-weight: 500;
`;

export const InfoPlaceholder = styled.div`
  color: #64748b;
  font-size: 0.98rem;
  text-align: center;
  margin-top: 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`; 
 