import React from 'react';
import Like from '../Like';

const Album = () => {
  const albums = [
    { name: 'The Eminem Show' },
    { name: 'Encore' },
    { name: 'Relapse' },
    { name: 'Recovery' }
  ]

  const renderRows = () => {
    return albums.map(album => <tr><td>{album.name}</td><td><Like /></td></tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>

      <thead>

        <tr>
          <th>Popular albums</th>
        </tr>

      </thead>

      <tbody>
        {renderRows()}
      </tbody>

    </table>
  );
};

export default Album;
