import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
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
        <div role="alert" style={{ color: '#dc2626', padding: 24, background: '#fef2f2', borderRadius: 12 }}>
          <h2>Something went wrong.</h2>
          <p>Sorry, an unexpected error occurred in the app.</p>
          <button
            style={{
              marginTop: 16,
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer'
            }}
            onClick={this.handleRefresh}
          >
            Refresh App
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 
