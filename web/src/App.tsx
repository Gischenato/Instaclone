import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
