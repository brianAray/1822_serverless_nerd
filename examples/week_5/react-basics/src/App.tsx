import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentOne from './components/ComponentOne/ComponentOne';
import EventsDemo from './components/EventsDemo/EventsDemo';
import ListDemo from './components/ListDemo/ListDemo';
import ParentComponent from './components/Props/ParentComponent/ParentComponent';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hooks from './components/Hooks/Hooks';
import PokeSearch from './components/Hooks/PokeSearch';
import Login from './components/LiftingState/Login';

/**
 * JSX
 * 
 * JavaScript XML
 * 
 * File format that allows us to write HTML and JS in the same file
 * 
 */

function App() : JSX.Element{
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}/>
        <Route path="/events" element={<EventsDemo/>}/>
        <Route path="/list" element={<ListDemo/>}/>
        <Route path="/props" element={<ParentComponent/>}/>
        <Route path="/hooks" element={<Hooks/>}/>
        <Route path="/poke" element={<PokeSearch/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

// class App extends React.Component {
//   render(): React.ReactNode {
//     return (
//       <div className='App'>
//         Hello react!
//       </div>
//     )
//   }
// }

export default App;
