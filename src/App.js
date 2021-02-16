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
    
  );
}

export default App;