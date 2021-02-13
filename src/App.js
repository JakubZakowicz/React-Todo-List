<<<<<<< HEAD
import React from 'react';
import Board from './Components/Board';
import GlobalState from './Context/GlobalState'

function App() {

  return (
    <GlobalState>
      <div className="h-screen bg-gray-100">
        <Board />
      </div>
    </GlobalState>
    
=======
import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board';

function App() {

  const [todoForm, setTodoForm] = useState(<div></div>)

  return (
    <div className="h-screen bg-gray-100">
    
      <Board  setTodoForm={setTodoForm}/>

      {todoForm}

    </div>
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
  );
}

export default App;