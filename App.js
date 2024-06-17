import React, { useState } from 'react';
import FormulaInput from './components/FormulaInput';
import Controls from './components/Controls';
import ResultsDisplay from './components/ResultsDisplay';

const App = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = (formula) => {
    // Call to backend API to get song recommendations based on the formula
    // Example:
    // fetch('/api/recommend', {
    //   method: 'POST',
    //   body: JSON.stringify({ formula }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // .then(response => response.json())
    // .then(data => setSongs(data.songs));
  };

  return (
    <div>
      <h1>Math to Music Recommendation</h1>
      <FormulaInput onSubmit={fetchSongs} />
      <Controls onSubmit={fetchSongs} />
      <ResultsDisplay songs={songs} />
    </div>
  );
};

export default App;
