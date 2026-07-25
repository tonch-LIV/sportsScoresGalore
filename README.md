# Sports, Scores, Galore  

## Overview

Sports, Scores, Galore is a React single-page application that allows users to search for soccer matches by league and date, displaying live scores, upcoming fixtures, and match information through a clean and responsive interface.

The application communicates with a custom Express backend, which retrieves data from public sports APIs and returns only the information needed by the frontend.

### Current Goals

- Search matches by supported soccer league
- Search matches by date
- Display fixtures, live scores, and match status
- View selected match details
- Refresh scores manually

### Planned Features (stretch)

- Filter matches by team
- Venue and city information
- Current and forecast weather
- Team and player statistics
- Auth0 user authentication
- Save favorite teams using MongoDB
- Nearby restaurants and local information

### Technologies

- React
- Vite
- React Router
- Axios
- Bootstrap / React Bootstrap
- JavaScript
- CSS


## Backend Repository

This project depends on the [Sports, Scores, Galore backend API](https://github.com/tonch-LIV/sportsScoresGalore_backend), which handles requests to external sports services and manages application data.

## Screenshot

*(Coming soon)*

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Changelog

- Initial setup using Vite template.  
- Merge of conflicts from creating repo with License before initiliazing / pushing to git.  
