import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Pinpad } from './components/pinPad/pinPad';
import storePinPad from './redux';




const App: React.FC = () => {
  return (
    <Provider store={storePinPad}>
      <div className="App">
        <Pinpad />
      </div>
    </Provider>
  );
}

export default App;
