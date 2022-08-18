import './App.css';
import Search from './components/search';


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

            <div className='movie_list'>

            </div>


        </div>
      
      </div>

    </div>
  );
}

export default App;
