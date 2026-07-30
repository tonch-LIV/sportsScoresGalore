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

*(Coming soon)*

## Local Development

Install dependencies:

```bash
npm install
```

To start the frontend, (*The Sports, Scores, Galore Express backend must also be running for match requests to succeed.*)

```bash
npm run dev
```

## Changelog

- Initial setup using Vite + React template.  
- Merge of conflicts from creating repo with License before initiliazing / pushing to git.  
- **`testDoor`** branch created.
  - Selected Footballdata.io as the primary soccer data provider.
  - Confirmed the initial set of five supported competitions after testing.
  - re-structure / re-word of readme and enclosed info (plus table of contents up top).

  <!-- ## If I Had More Time

  - -->