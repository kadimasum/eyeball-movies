import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';
import MovieDetail from './components/movie_detail';
import ErrorPage from './components/error_page';
import MovieResults from './components/movie_results';
import { useState } from 'react';



function App() {


  const [searchResults, setSearchResults] = useState([])

    return (
      <div> 
        <Routes>
            <Route path="/" element={<LandingPage props={{searchResults, setSearchResults}}/>} />
            <Route path="/movie_detail" element={<MovieDetail />} />
            <Route path="/search_results" element={<MovieResults props={{searchResults, setSearchResults}} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    )
}

export default App;
