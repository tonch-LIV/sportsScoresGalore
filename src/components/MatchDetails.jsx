function MatchDetails({ match }) {
  if (!match) {
    return (
      <section className="match-details">
        <h2>Match Details</h2>
        <p>Select a match to view its details.</p>
      </section>
    )
  }

  const formattedDate = match.timestamp
    ? new Date(match.timestamp * 1000).toLocaleString()  // API uses seconds, JS millisecs
    : match.date

  const hasScore = 
    match.score.home !== null && match.score.away !== null

  return (
    <section className="match-details">
      <h2>Match Details</h2>

      <h3>{match.homeTeam.name} vs. {match.awayTeam.name}</h3>

      {match.status === 'complete' && hasScore ? (
        <p>Final score: {match.score.home} - {match.score.away}</p>
      ) : (
        <p>{match.displayStatus}</p>
      )}

      <p>Date and time: {formattedDate}</p>

      <p>Venue: {match.venue.name || 'Venue not available'}</p>

      <p>Location: {match.venue.location || 'Location not available'}</p>
    </section>
  )
}

export default MatchDetails