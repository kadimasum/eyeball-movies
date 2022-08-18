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

      </div>

    </div>
  );
}

export default App;
