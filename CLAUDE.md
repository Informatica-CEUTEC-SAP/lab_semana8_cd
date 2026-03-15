# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint 9 flat config)
- **Preview production build:** `npm run preview`

## Architecture

React 19 + Vite 8 single-page application using JSX (no TypeScript). Scaffolded from the official `create-vite` React template.

- `src/main.jsx` — entry point, renders `<App />` inside `<StrictMode>`
- `src/App.jsx` — root component (currently a landing page with counter demo)
- `src/App.css` / `src/index.css` — styling (plain CSS, no framework)
- `public/` — static assets served at root (icons, favicon)
- `src/assets/` — imported assets bundled by Vite

## Lint Rules

ESLint flat config (`eslint.config.js`) extends `@eslint/js` recommended, `react-hooks`, and `react-refresh` plugins. Custom rule: `no-unused-vars` ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).
