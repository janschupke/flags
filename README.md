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

## Error Boundaries

This app uses a React Error Boundary (`src/components/ErrorBoundary.jsx`) to catch and display errors in the UI. If a component throws, a friendly error message is shown instead of a blank screen. The error boundary also provides a **Refresh App** button, allowing users to reload the app and recover from errors.

## Accessibility (a11y) Testing

Accessibility is checked using [vitest-axe](https://github.com/nickcolley/vitest-axe). There are tests that ensure the main UI has no major accessibility violations. You can add more a11y tests for other components as needed.

## Snapshot Testing

Snapshot tests are used to ensure the rendered output of components does not change unexpectedly. When you run the test suite, snapshots are saved in `__snapshots__` folders next to your test files.

### How to Run Snapshot Tests

- To run all tests (including snapshot and a11y):
  ```sh
  npm test
  # or
  npx vitest
  ```

- If a snapshot test fails because the output changed, and you want to update the snapshot (e.g., after an intentional UI change):
  ```sh
  npx vitest -u
  # or
  npm test -- -u
  ```

- Review the diff before updating snapshots to ensure changes are intentional.

## Adding More Tests
- To add more snapshot tests, use:
  ```js
  import { render } from '@testing-library/react';
  it('matches snapshot', () => {
    const { asFragment } = render(<MyComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
  ```
- For accessibility, use:
  ```js
  import { axe, toHaveNoViolations } from 'vitest-axe';
  expect.extend(toHaveNoViolations);
  // ...
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  ```

## Summary
- Error boundaries catch UI errors and show a fallback (with a Refresh App button).
- Accessibility is checked automatically in tests.
- Snapshots help you catch unexpected UI changes.

For more, see the test files in `src/components/`.
