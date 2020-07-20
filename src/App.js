import React from 'react';
import './App.css';
import Calculator from './Calculator';
import MyProvider from './context/MyProvider';
function App() {
  return (
    <MyProvider>
      <div className="App">
        <Calculator />
      </div>
    </MyProvider>
  );
}

export default App;
