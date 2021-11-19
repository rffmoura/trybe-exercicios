import React from 'react';
import './App.css';
import ISSLocation from './components/ISSlocation';

/*
actions globais
const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
}
*/

function App() {
  return (
    <div className="App">
      <h1>Localização da ISS</h1>
      <ISSLocation />
    </div>
  );
}

export default App;
