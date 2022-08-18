import './App.css';
import Search from './components/search';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'


function App() {
  return (
    <div className="hero_container">

      <div className='hero_wrapper'>

        <div className='logo_and_search'>
            <h2>EyeballMovies</h2>
            <Search />
        </div>

        <div className='hero_content'>

            <div className='welcome_text'>
              <h1>Unlimited Movies For Ultimate Entertainment</h1>
              <p>Easily access movies of all genres and have maximum enjoyment</p>
            </div>

            <div className='movie_list_container'>
              <button className='movie_nav movie_nav_prev'><GrCaretPrevious /></button>
              <div className='movie_list'></div>
              <button className='movie_nav movie_nav_next'><GrCaretNext /></button>
            </div>


        </div>
      
      </div>

    </div>
  );
}

export default App;
