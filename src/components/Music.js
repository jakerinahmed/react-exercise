import React, { useState } from 'react';

const Song = () => {
  const [song] = useState([
    { name: 'Bulbasaur'},
    { name: 'Charmander'},
    { name: 'Squirtle'},
    { name: 'Caterpie'},
    { name: 'Pidgey'},
    { name: 'Pikachu'}
  ])

  const renderRows = () => {
    return song.map(p => <tr><td>{p.name}</td></tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  );
};

export default Song;
