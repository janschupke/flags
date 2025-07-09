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
  width: 100vw;
  background: linear-gradient(135deg, #6b7280 0%, #374151 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Container = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  padding: 32px 32px 28px 32px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.08rem;
  margin-bottom: 28px;
  font-weight: 400;
`;

export const Score = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: #1e293b;
  background: #f7fafc;
  padding: 14px 28px;
  border-radius: 10px;
  display: inline-block;
  border: 2px solid #e2e8f0;
  margin-bottom: 20px;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

export const FlagSection = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 20px;
  border: 2px solid #e2e8f0;
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
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  height: 160px;
  object-fit: cover;
  border: 2px solid #e2e8f0;
  margin-bottom: 0;
`;

export const FlagImgSpaced = styled(FlagImg)`
  margin-bottom: 20px;
`;

export const Placeholder = styled.div`
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
  color: #64748b;
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
`;

export const InfoSection = styled.div`
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

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  text-align: left;
  flex: 2;
`;

export const InfoItem = styled.div`
  background: #f8fafc;
  padding: 18px 14px 14px 14px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 2px;
`;

export const InfoLabel = styled.span`
  display: block;
  color: #2563eb;
  font-weight: 700;
  font-size: 1.04rem;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
`;

export const InfoValue = styled.span`
  display: block;
  color: #64748b;
  font-weight: 500;
  font-size: 1.13rem;
  margin-top: 2px;
  word-break: break-word;
`;

export const ResultIndicator = styled.div`
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

export const ResultIndicatorSpaced = styled(ResultIndicator)`
  margin-top: 18px;
`;

export const InfoCaption = styled.div`
  font-size: 1.18rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 14px;
  letter-spacing: 0.01em;
`;

export const InfoPlaceholder = styled.div`
  color: #64748b;
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
`;

export const Footnote = styled.div`
  margin-top: 32px;
  font-size: 0.95rem;
  color: #64748b;
  text-align: center;
  opacity: 0.85;
`;

export const Disclaimer = styled.div`
  margin-top: 6px;
  color: #64748b;
  font-size: 0.98rem;
  font-weight: 400;
`;

export const InfoWrapper = styled.div`
  width: 100%;
`; 
