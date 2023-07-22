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
        <Route path="/" exact element={ <Home /> } /> 
        <Route path="/rooms/" exact element={<Rooms />} />
        <Route path="/rooms/:slug" exact element={<SingleRoom />} />
        <Route path="/error" exact element={<Error />} />
      </Routes>
      
    </Router>
  );
}

export default App;
