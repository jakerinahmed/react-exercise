import React, { useState } from 'react';
import Like from './Like';

const Song = () => {
  const [song] = useState([
    { name: 'Lose Yourself'},
    { name: 'Not Afraid'},
    { name: 'Love The Way You Lie'}

  ])

  const renderRows = () => {
    return song.map(p => <tr><td>{p.name}</td><td><Like/></td></tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>

      <thead>

        <tr>
          <th>Popular tracks</th>
        </tr>

      </thead>

      <tbody>
        { renderRows() }
      </tbody>
      
    </table>
  );
};

export default Song;
