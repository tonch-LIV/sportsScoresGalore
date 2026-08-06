# Sports, Scores, Galore  

- [Overview](#overview)
  - [Supported Competitions](#supported-competitions)
  - [Current Goals](#current-goals)
  - [Planned Features (stretch)](#planned-features-stretch)
  - [Application Layout](#application-layout)
  - [Technologies](#technologies)
- [Backend Repository](#backend-repository)
- [Screenshots](#screenshots)
- [Local Development](#local-development)
- [Changelog](#changelog)
<!-- - [If I Had More Time](#if-i-had-more-time) -->

## Overview

Sports, Scores, Galore is a React single-page application that allows users to search and display soccer fixtures, scores, match status, participating teams, and selected match details from supported competitions through a clean and responsive interface.

The React frontend communicates with a custom Express backend, which retrieves data from public sports APIs (Footballdata.io), removes unnecessary fields, and returns only the information needed by the frontend.

### Supported Competitions

The initial version of the application will support:

- Premier League (England)
- La Liga (Spain)
- UEFA Champions League
- UEFA Europa League
- FIFA World Cup

Additional leagues, competitions, and sports may be added later.

### Current Goals

- Select a supported soccer competition
- Select matches by date
- Search for scheduled and completed matches
- Display home and away teams
- Display team and competition logos when available
- Display match scores and status
- Display scheduled start time when match has not begun
- View venue and location information for selected match
- Refresh scores manually
- Provide loading, error, and empty-result messages

### Planned Features (stretch)

- Filter matches by team
- Forecast weather
- Team and player statistics
- Auth0 user authentication
- Save favorite teams using MongoDB
- Quickly retrieve matches for favorite teams
- Nearby restaurants and local information
- Support additional soccer competitions and other sports

### Application Layout

The main page will use a three-column structure:

1. **Match Results**  
   Displays matches returned by the selected competition and date.
2. **Selected Match Details**  
   Displays the venue, location, date, and starting time for the selected match.
3. **Selected Match Extras**  
   Reserved for weather, restaurants, statistics, and other stretch features.

On smaller screens, these sections will stack vertically.

### Technologies

- React
- Vite
- React Router
- Axios
- Bootstrap / React Bootstrap
- JavaScript
- CSS


## Backend Repository

This project depends on the [Sports, Scores, Galore backend API](https://github.com/tonch-LIV/sportsScoresGalore_backend), which handles requests to external sports services ([Footballdata.io API](https://footballdata.io/)) and manages application data.

The Express backend must also be running for API requests to succeed.

## Screenshots

*([Coming soon](link))*

## Local Development

Install dependencies:

```bash
npm install
```

To start the frontend, 

```bash
npm run dev
```

(*The Sports, Scores, Galore Express backend must also be running for match requests to succeed.*)

## Changelog

- Initial setup using Vite + React template.  
- Merge of conflicts from creating repo with License before initializing / pushing to git.  
- **`testDoor`** branch created.
  - Selected Footballdata.io as the primary soccer data provider.
  - Confirmed the initial set of five supported competitions after testing.
  - Restructured and revised README, including table of contents.
  - created `components` subdirectory -> `SearchForm.jsx` and `MatchList.jsx`.
  - installed axios.
  - defined `VITE_API_URL` variable; `.env`.
  - started controlled form; `SearchForm.jsx`,
  - `MatchList.jsx` handles intructions for no search made, 'empty message' for no results found, and the return of cards for successful request.
  - updated `App.jsx` past vite template with actual project.
  - migrated some 'legacy' rules from `Code-301-PDX/_MATERIALS/.eslintrc.json`; `eqeqeq`, `curly`, `no-var`, `prefer-const` (commented at the moment); `eslint.config.js`.
  - rendering and searching functioning through web browser! (unformatted, but all the same).
    - React form
      - Express validation
      - API source (Footballdata.io) request
      - normalized response
      - React result or empty message
  - added `selectedMatch` state; `App.jsx`.
  - passed selection controls through `<MatchList />`; `App.jsx`.
  - updated `MatchList()` parameters to reflect additions ^^; `MatchList.jsx`.
  - created `MatchDetails.jsx`; `../components/`.
  - imported `MatchDetails`, added under `return` statement, while enclosing the corresponding 'sibling' statements; `App.jsx`.
  - added missing 'Venue' name validation; `MatchDetails.jsx`.
  - minor css overhaul for wireframe adjacent look, removing vite tamplate ; `index.css`, `App,css` `SearchForm.jsx`.
  - comment syntax fixed; `App.jsx`, `MatchList.jsx`.
  - both `lint` and `build` passing atp.
  - [accessibility lighthouse screenshot](link).
  - clean up.

- **`filter`** branch created. (narrow (competition and date) results by team)
   - created reauable match function that makes searches case-insensitive; `matchIncludesTeam()`; `App.jsx`.
   - created  `teamFilter` state, which remembers what thew user has typed; `App()`; `App.jsx`.
   - created changeHandler `handleteamFilterChange()` that both, updates state and selects the first result; rather than showing non-relevant info on details panel; `App.jsx`.
   - reset the filter on new searches ; `handleSearch()`; `App.jsx`.
   - created `filteredMatches` to produce filtered array, separate from original `matches` array; `App.jsx`.
   - added filter input fr user in the `return` statement; `App.jsx`.
   - passed filtered changes to `<MatchList>`; `App.jsx`.
   - added `teamFilter` to props for `MatchList()` to use inside `emptyMessage()` and provide accurate message for ewmpty results; adding distinction between 'no matches returned fro api' and 'matches returned, but none matching filter'; `MatchList.jsx`.
   - added css styling; `.form-field` will handle label and input; `App.css`.
   - [screenshots of feature](path)

  <!-- ## If I Had More Time

  - -->