// API and External URLs
export const FLAG_CDN_BASE_URL = 'https://flagcdn.com';
export const FLAG_CDN_SIZE = 'w320';

// Game States
export enum GameState {
  PLAYING = 'playing',
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
}

// Answer Status
export enum AnswerStatus {
  CORRECT = '✓ Correct!',
  INCORRECT = '✗ Incorrect',
}

// UI Text
export const UI_TEXT = {
  title: 'Flags Quiz',
  subtitle: 'Test your knowledge of world flags and learn about countries',
  currentFlag: 'Current Flag',
  previousFlag: 'Previous Flag',
  previousCountryInfo: 'Previous Country Information',
  score: 'Your Score:',
  placeholder: {
    previousFlag: 'Your previous answer will appear here after your first guess.',
    previousInfo: 'No previous flag information yet. Submit your first answer to see details here.',
  },
  labels: {
    name: 'Name',
    capital: 'Capital',
    continent: 'Continent',
    government: 'Government',
    language: 'Language',
    yourAnswer: 'Your Answer',
  },
  fallback: 'Not available',
} as const;

// Colors
export const COLORS = {
  primary: {
    blue: '#3b82f6',
    darkBlue: '#1d4ed8',
    lightBlue: '#2563eb',
  },
  text: {
    primary: '#1e293b',
    secondary: '#64748b',
    muted: '#a0aec0',
  },
  background: {
    primary: '#f7fafc',
    secondary: '#f8fafc',
    placeholder: '#f1f5f9',
  },
  border: {
    primary: '#e2e8f0',
  },
  status: {
    success: {
      text: '#059669',
      background: '#ecfdf5',
      border: '#10b981',
    },
    error: {
      text: '#dc2626',
      background: '#fef2f2',
      border: '#ef4444',
    },
  },
  gradient: {
    primary: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    background: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)',
  },
} as const;

// UI Constants
export const UI = {
  borderRadius: {
    small: '8px',
    medium: '10px',
    large: '12px',
    xlarge: '16px',
  },
  spacing: {
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },
  shadows: {
    small: '0 2px 6px rgba(0, 0, 0, 0.04)',
    medium: '0 6px 20px rgba(0, 0, 0, 0.1)',
    large: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
} as const;

// Game Constants
export const GAME = {
  flagImageSize: {
    width: '300px',
    height: '160px',
  },
  inputPlaceholder: 'Enter country name...',
  buttonText: 'Check Answer',
} as const;

// Contact Information
export const CONTACT = {
  email: 'jan@schupke.io',
  disclaimer: 'Some flags or information may be outdated or incorrect.',
} as const; 
