import React from 'react';

const ResultsDisplay = ({ songs }) => (
  <div>
    <h2>Recommended Songs:</h2>
    <ul>
      {songs.map((song, index) => (
        <li key={index}>
          {song.name} by {song.artist}
        </li>
      ))}
    </ul>
  </div>
);

export default ResultsDisplay;
