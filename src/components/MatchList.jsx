function MatchList({
  matches,
  teamFilter,
  hasSearched,
  selectedMatchId,
  onSelectMatch,
}) {
  if (!hasSearched) {
    return <p>Select a competition and date to search for matches.</p>
  }

  if (matches.length === 0) {
    const emptyMessage = teamFilter.trim()
    ? `No Matches include a team matching "${teamFilter.trim()}".`
    : `No Matches were found for that competition and date.`

    return <p>{emptyMessage}</p>
  }

  return(
    <section aria-labelledby="matches-heading">
      <h2 id="matches-heading">Matches</h2>

      <div className="match-list">
        {matches.map((match) => {
          const hasScore = 
            match.score.home !== null && match.score.away !== null

          const matchResult = 
            match.status === 'complete' && hasScore
              ? `${match.score.home} - ${match.score.away}`
              : match.displayStatus

          return(
            <article 
              className={
                selectedMatchId === match.id 
                ? 'match-card selected' 
                : 'match-card'
              } 
              key={match.id}
            >
              <div className="team">
                {match.homeTeam.logo && (
                  <img
                    src={match.homeTeam.logo}
                    alt={`${match.homeTeam.name} logo`}
                    width="40"
                    height="40"
                  />
                )}

                <span>{match.homeTeam.name}</span>
              </div>

              <strong>{matchResult}</strong>

              <div className="team">
                {match.awayTeam.logo && (
                  <img
                    src={match.awayTeam.logo}
                    alt={`${match.awayTeam.name} logo`}
                    width="40"
                    height="40"
                  />
                )}

                <span>{match.awayTeam.name}</span>
              </div>

              <p>{match.displayStatus}</p>
              <p>{match.date}</p>

              {match.venue.name && (
                <p>
                  {match.venue.name}
                  {match.venue.location && ` - ${match.venue.location}`}
                </p>
              )}

              {/* Selecting match sends 'match' back to `App`;   setSelectedMatch` updates state */}
              <button
                type="button"
                onClick={() => onSelectMatch(match)} 
                aria-pressed={selectedMatchId === match.id}
              >
                {selectedMatchId === match.id ? 'Selected' : 'View details'}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default MatchList