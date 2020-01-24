import React from 'react';
import './App.css';
import { Pinpad } from './components/pinPad/pinPad';


export const correctPin = '4455'

const App: React.FC = () => {
  return (
    <div className="App">
      <Pinpad />
    </div>
  );
}

export default App;
