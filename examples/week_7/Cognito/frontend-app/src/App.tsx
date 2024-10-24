import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import RegisterComponent from './Components/RegisterComponent/RegisterComponent';
import ConfirmationComponent from './Components/ConfirmationComponent/ConfirmationComponent';

function App() {
  return (
    <div className="App">
      {/* <LoginComponent/> */}
      <RegisterComponent/>
      {/* <ConfirmationComponent/> */}
    </div>
  );
}

export default App;
