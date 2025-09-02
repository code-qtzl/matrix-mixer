# Copilot Instructions for matrix-mixer

## Project Overview

-   **matrix-mixer** is a React application built with Vite, providing a grid-based interface for selecting and managing items (fruits, sizes, colors).
-   The main entry point is `src/main.jsx`, which loads `App.jsx`.
-   Components are organized in `src/components/` (e.g., `List.jsx`, `SelectedItems.jsx`).
-   Utility functions are in `src/utils/` (e.g., `itemsGenerator.jsx`).
-   Static assets are in `public/` and `src/assets/`.

## Architecture & Data Flow

-   The app uses React functional components and hooks for state management.
-   Data constants (e.g., available fruits, sizes, colors) are defined in `src/data/constants.jsx`.
-   User selections are managed in state and passed between components via props.
-   The UI is styled using CSS files in `src/`.

## Developer Workflows

-   **Install dependencies:** `npm install`
-   **Start dev server:** `npm run dev` (Vite, hot reload)
-   **Build for production:** `npm run build`
-   **Preview production build:** `npm run preview`
-   No test scripts or test files are present by default.

## Conventions & Patterns

-   All source files use `.jsx` for React components and utilities, even for non-component logic.
-   Data and configuration are separated into `src/data/` and `src/utils/`.
-   Components are kept small and focused; state is lifted to parent components when needed.
-   No Redux, Context API, or external state management libraries are used.
-   ESLint is configured via `eslint.config.js` for code quality.

## Key Files & Directories

-   `src/App.jsx`: Main app logic and state management.
-   `src/components/`: UI components.
-   `src/data/constants.jsx`: Data definitions.
-   `src/utils/itemsGenerator.jsx`: Utility for generating item lists.
-   `vite.config.js`: Vite configuration.
-   `eslint.config.js`: Linting rules.

## Example Patterns

-   To add a new selectable item type, update `src/data/constants.jsx` and relevant components in `src/components/`.
-   To change UI layout, modify `App.jsx` and component CSS files.

---

For questions about unclear patterns or missing workflows, ask the user for clarification or examples from their recent changes.
