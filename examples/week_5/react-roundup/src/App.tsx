import React from 'react';
import logo from './logo.svg';
import './App.css';
import AxiosExample from './AxiosFetch/AxiosExample';
import MyBasicClassComponent from './ClassComponents/MyBasicClassComponent';
import CounterClassComponent from './ClassComponents/CounterClassComponent';
import LifecycleExample from './ClassComponents/LifecycleExample';
import MyController from './ControllerViewPattern/MyController';
import Greeting from './Testing/Greeting/Greeting';
import Counter from './Testing/Counter/Counter';
import Async from './Testing/Async/Async';

function App() {
  return (
    <div className="App">
      <Async/>
    </div>
  );
}

export default App;
