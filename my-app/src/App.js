import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Video from './pages/Video';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Video/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
