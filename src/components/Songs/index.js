import React from 'react';
import Like from '../Like';

const Song = () => {
  const track = [
    { name: 'Lose Yourself' },
    { name: 'Not Afraid' },
    { name: 'Love The Way You Lie' },
    { name: 'Toy Soldiers' }
  ]

  const renderRows = () => {
    return track.map(songs => <tr><td>{songs.name}</td><td><Like /></td></tr>)
  }

  return (
    <table role='table' style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>

      <thead>

        <tr>
          <th>Popular tracks</th>
        </tr>

      </thead>

      <tbody>
        {renderRows()}
      </tbody>

    </table>
  );
};

export default Song;
