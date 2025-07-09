# Flags Quiz (React + Vite)

An interactive web application that tests users' knowledge of world flags and provides educational information about countries. Built with React, Vite, styled-components, and React Testing Library.

## ✨ Features
- **Interactive Quiz System**: Randomly displays country flags for user identification
- **Smart Answer Recognition**: Any full case-insensitive word of the country name is accepted
- **Comprehensive Country Information**: Capital, continent, government, language
- **Progress Tracking**: Real-time score monitoring
- **Previous Flag Review**: Shows info about the last flag
- **Responsive Design**: Modern, mobile-friendly UI
- **Styled with styled-components**
- **Tested with React Testing Library + Vitest**

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16+ recommended)
- **npm**

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Testing
```bash
npm run test
```
Runs the test suite with Vitest and React Testing Library.

## 🛠️ Stack
- **Frontend**: React 18+, Vite
- **Styling**: styled-components
- **Testing**: React Testing Library, Vitest, jest-dom
- **Flags**: [Flagcdn.com](https://flagcdn.com/) (ISO 3166-1 alpha-2 codes)

## 📁 Project Structure
```
flags/
├── src/
│   ├── components/         # React components (FlagQuiz, etc.)
│   ├── data.js             # Country/flag quiz data
│   ├── utils.js            # Utility functions (answer checking)
│   ├── setupTests.js       # Test setup for jest-dom
│   ├── App.jsx             # Main app entry
│   └── main.jsx            # React/Vite bootstrap
├── public/                 # Static assets
├── package.json            # Scripts and dependencies
├── vitest.config.js        # Vitest config
└── README.md               # This file
```

## 🙏 Acknowledgments
- **Flag Images**: [Flagcdn.com](https://flagcdn.com/) (powered by [Flagpedia.net](https://flagpedia.net/))
- **Original Project**: 2014, refactored for modern stack

---

MIT License
