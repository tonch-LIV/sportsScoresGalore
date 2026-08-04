const competitions = [
  { id: 15, name: 'Premier League' },
  { id: 10, name: 'La Liga' },
  { id: 45, name: 'UEFA Champions League' },
  { id: 46, name: 'UEFA Europa League' },
  { id: 50, name: 'FIFA World Cup' }
];

function SearchForm({
  league,
  date,
  loading,
  onLeagueChange,
  onDateChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="league">Competition</label>
        <select
          id="league"
          value={league}
          onChange={(event) => onLeagueChange(event.target.value)}
        >
          <option value="">Choose a competition</option>

          {competitions.map((competition) => (
            <option key={competition.id} value={competition.id}>
              {competition.name}
            </option>
          ))}
          </select>
      </div>

      <div>
        <label htmlFor="match-date">Date</label>
        <input
          id="match-date"
          type="date"
          value={date}
          onChange={(event) => onDateChange(event.target.value)}
        />
      </div>
      
      <button type="submit" disabled={loading || !league || !date}>
        {loading ? 'Searching...' : 'Search Matches'}
      </button>
    </form>
  )
}

export default SearchForm;
