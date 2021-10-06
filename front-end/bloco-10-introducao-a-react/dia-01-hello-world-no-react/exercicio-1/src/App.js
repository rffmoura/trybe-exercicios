import React from 'react';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>
}

const arr = ['limpar a casa', 'sair com o dog', 'lavar a louça', 'lavar as roupas']

function App() {
  return (
    <div className="App">
      <ul>{arr.map((task) => Task(task))}</ul>
    </div>
  );
}

export default App;
