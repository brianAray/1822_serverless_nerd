import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './components/Login/LoginContainer';
import { User, UserContext } from './components/Context/userContext';

function App() {
    const [user, setUser] = useState<User>({} as any);
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LoginContainer setUser={setUser}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
