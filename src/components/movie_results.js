import React from "react";
import Search from "./search";
import Movie from "./movie";


export default function MovieResults({props}){

    // const [searchResults, setSearchResults] = useState([])
    const {searchResults, setSearchResults} = props

    return (
        <div>
               <div className="hero_container search_hero">
  
                    <div className='hero_wrapper search_hero_wrapper'>

                        <div className='logo_and_search'>
                            <h2>EyeballMovies</h2>
                            <Search setSearchResults={setSearchResults}/>
                        </div>   


                        <div className='search_results_container'>

                        {searchResults.map(movie =>  <Movie key={movie.imdbID} movie={ movie } />)}

                        </div>
                    </div>

                </div>

        </div>
    )
}