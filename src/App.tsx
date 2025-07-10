import React from 'react';
import FlagQuiz from './components/FlagQuiz';
import { GlobalStyle } from './components/styled/FlagQuiz.styles';
import ErrorBoundary from './components/ui/ErrorBoundary';

const App: React.FC = () => {
  return <>
    <GlobalStyle />
    <ErrorBoundary>
      <FlagQuiz />
    </ErrorBoundary>
  </>;
};

export default App; 
