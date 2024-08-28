import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Chess from './components/Chess.js';

function Main(){
  return (
    <div>
      <Chess />
    </div>
  )
}

ReactDOM.render(<Main />,document.getElementById('root'));