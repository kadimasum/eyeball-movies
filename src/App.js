import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';
import MovieDetail from './components/movie_detail';
import ErrorPage from './components/error_page';



function App() {
    return (
      <div> 
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="movie_detail" element={<MovieDetail />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    )
}

export default App;
