import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/singleroom" component={SingleRoom} />
        <Route exact path="/error" component={Error} />
      </Routes>
      
    </Router>
  );
}

export default App;
