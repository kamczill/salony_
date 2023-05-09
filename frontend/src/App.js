import React, {useEffect, useState} from 'react'
import './App.css';
import Home from './scenes/Home';
import NewsPage from './scenes/NewsPage';
import Tags from './scenes/Tags';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Panel from './scenes/Panel';

function App() {
  
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/news/:href' element={<NewsPage />} />
            <Route path='/users/news/:href' element={<NewsPage />} />
            <Route path='/tags/:tag' element={<Tags />} />
            <Route path='/panel' element={<Panel />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
