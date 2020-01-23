import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { Pinpad } from './components/pinPad/pinPad';
import pinPadApp from './reducers';

let storePinPad = createStore(pinPadApp)


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
