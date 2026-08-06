import { useState } from 'react';
import axios from 'axios';

import SearchForm from './components/SearchForm.jsx';
import MatchList from './components/MatchList.jsx';
import MatchDetails from './components/MatchDetails.jsx';

import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function App() {
  const [league, setLeague] = useState('')
  const [date, setDate] = useState('')
  const [matches, setMatches] = useState([])
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  async function handleSearch(event) {
    event.preventDefault()

    setLoading(true)
    setError('')

    setSelectedMatch(null)  // clears old details while new search runs

    try {
      const response = await axios.get(`${API_URL}/api/matches`, {
        params: {
          league,
          date,
        },
      })

      // auto select first match returned 
      const returnedMatches = response.data.matches ?? []

      setMatches(returnedMatches)
      setSelectedMatch(returnedMatches[0] ?? null)  // becomes null if array empty
      setHasSearched(true)
    } catch (requestError) {
      setMatches([])
      setSelectedMatch(null)
      setHasSearched(true)

      setError(
        requestError.response?.data?.message ||
          'Unable to retrieve matches. Please try again',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Sports, Scores, Galore!</h1>
        <p>Search futbol fixtures and scores by competition and date.</p>
      </header>

      <SearchForm
        league={league}
        date={date}
        loading={loading}
        onLeagueChange={setLeague}
        onDateChange={setDate}
        onSubmit={handleSearch}
      />

      {loading && <p role="status">Loading matches...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <div className="dashboard">
          {/* Optional chaining safely returns `undefined` when no match selected */}
          <MatchList 
            matches={matches} 
            hasSearched={hasSearched} 
            selectedMatchId={selectedMatch?.id}  
            onSelectMatch={setSelectedMatch} 
          />

          <MatchDetails match={selectedMatch} />

          <aside className="match-extras">
            <h2>Match Extras</h2>
            <p>Weather and nearby information will appear here later.</p>
          </aside>
        </div>
      )}
    </main>
  )
}

export default App
