import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS, UI } from '../../constants';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const AlertContainer = styled.div`
  color: ${COLORS.status.error.text};
  padding: 24px;
  background: ${COLORS.status.error.background};
  border-radius: ${UI.borderRadius.large};
`;

const RefreshButton = styled.button`
  margin-top: 16px;
  padding: 10px 24px;
  background: ${COLORS.gradient.primary};
  color: white;
  border: none;
  border-radius: ${UI.borderRadius.medium};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // You can log error info here if needed
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <AlertContainer role="alert">
          <h2>Something went wrong.</h2>
          <p>Sorry, an unexpected error occurred in the app.</p>
          <RefreshButton onClick={this.handleRefresh}>
            Refresh App
          </RefreshButton>
        </AlertContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 
 