# Flags Quiz (React + Vite + TypeScript)

An interactive web application that tests users' knowledge of world flags and provides educational information about countries. Built with React, Vite, TypeScript, styled-components, and React Testing Library.

Live demo: [https://flags.schupke.io](https://flags.schupke.io)

## ✨ Features
- **Interactive Quiz System**: Randomly displays country flags for user identification
- **Smart Answer Recognition**: Any full case-insensitive word of the country name is accepted
- **Comprehensive Country Information**: Capital, continent, government, language
- **Progress Tracking**: Real-time score monitoring
- **Previous Flag Review**: Shows info about the last flag
- **Responsive Design**: Modern, mobile-friendly UI
- **Error Boundaries**: Graceful error handling with recovery options
- **Accessibility**: Built with a11y best practices and automated testing
- **TypeScript**: Fully typed for better development experience

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

## 🎮 How to Play

1. A random country flag will be displayed.
2. Type the name of the country in the input box.
3. Press Enter or click "Check" to submit your answer.
4. You'll see if your answer was correct, and information about the country will appear.
5. Your score is tracked as you play. Try to get as many correct as you can!

## 📦 NPM Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run test` — Run all tests (unit, integration, a11y, snapshot)

## 🛠️ Troubleshooting

- If you see a port conflict, change the port in `vite.config.ts`.
- If tests fail due to missing Node features, ensure you're using Node 16+.
- For issues with flag images, check your internet connection (flags are loaded from Flagcdn.com).

## 🛠️ Stack
- **Frontend**: React 19+, Vite, TypeScript
- **Styling**: styled-components
- **Testing**: React Testing Library, Vitest, jest-dom, vitest-axe
- **Flags**: [Flagcdn.com](https://flagcdn.com/) (ISO 3166-1 alpha-2 codes)
- **Architecture**: Feature-based component organization with centralized types and constants

## 📁 Project Structure
```
flags/
├── src/
│   ├── components/         # React components
│   │   ├── features/       # Feature-specific components
│   │   │   ├── FlagDisplay.tsx
│   │   │   └── FlagInfo.tsx
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── QuizInput.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   └── styled/        # Styled components
│   ├── constants/          # Application constants
│   ├── data/              # Country/flag quiz data
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── setupTests.ts      # Test setup
│   ├── App.tsx            # Main app entry
│   └── main.tsx           # React/Vite bootstrap
├── public/                # Static assets
├── package.json           # Scripts and dependencies
├── vite.config.ts         # Vite config
├── vitest.config.ts       # Vitest config
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

## 🙏 Acknowledgments
- **Flag Images**: [Flagcdn.com](https://flagcdn.com/) (powered by [Flagpedia.net](https://flagpedia.net/))
- **Original Project**: 2014, refactored for modern stack

## 📝 License

MIT License. See [LICENSE](LICENSE) for details.

## Error Boundaries

This app uses a React Error Boundary (`src/components/ErrorBoundary.tsx`) to catch and display errors in the UI. If a component throws, a friendly error message is shown instead of a blank screen. The error boundary also provides a **Refresh App** button, allowing users to reload the app and recover from errors.

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
  ```tsx
  import { render } from '@testing-library/react';
  it('matches snapshot', () => {
    const { asFragment } = render(<MyComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
  ```
- For accessibility, use:
  ```tsx
  import { axe } from 'vitest-axe';
  // ...
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  ```

## Summary
- Error boundaries catch UI errors and show a fallback (with a Refresh App button).
- Accessibility is checked automatically in tests.
- Snapshots help you catch unexpected UI changes.

For more, see the test files in `src/components/`.

## Answer Logic & Accessibility

- Partial matches are accepted (e.g., "United" for "United States").
- Answers are case-insensitive.
- You can use Enter to submit your answer for faster play.
- Error boundaries provide graceful error recovery.
- Accessibility features include proper ARIA labels and keyboard navigation.
