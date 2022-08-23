import React from "react";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'
import Movie from './movie';
import { useEffect, useState } from 'react';
import Footer from './footer';
import Search  from "./search";



export default function LandingPage(){
    const [movies, setMovies] = useState([])
    const [romanticMovies, setRomanticMovies] = useState([])
    const [actionMovies, setActionMovies] = useState([])
    const [documentaries, setDocumentaryMovies] = useState([])
    const [searchResults, setSearchResults] = useState([])
  
  
    useEffect(() =>{
      fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
  
    }, [])
  
    useEffect(() =>{
      fetch("http://localhost:3000/romantic")
      .then(response => response.json())
      .then(data => setRomanticMovies(data))
    }, [])
  
    useEffect(() =>{
      fetch("http://localhost:3000/action")
      .then(response => response.json())
      .then(data => setActionMovies(data))
    }, [])
  
    useEffect(() =>{
      fetch("http://localhost:3000/documentaries")
      .then(response => response.json())
      .then(data => setDocumentaryMovies(data))
    }, [])
  
  
    const heroContent = () => {
      return
    }
  
    const renderComponents = () => {
      if(searchResults.length == 0){
        heroContent()
      }
    }
  
    return (
      <div className="hero_container">
  
        <div className='hero_wrapper'>
  
          <div className='logo_and_search'>
              <h2>EyeballMovies</h2>
              <Search setSearchResults={setSearchResults}/>
          </div>   
  
  
          <div className='search_results'></div>
  
          <div className='hero_content'>
  
              <div className='welcome_text'>
                <h1>Unlimited Movies For Ultimate Entertainment</h1>
                <p>Easily access movies of all genres and have maximum enjoyment</p>
              </div>
  
              <div className='movie_list_container'>
                <button className='movie_nav movie_nav_prev'><GrCaretPrevious /></button>
                <div className='movie_list'>
  
                  {movies.map(movie =>  <Movie key={movie.imdbID} movie={ movie } />)}
  
                </div>
                <button className='movie_nav movie_nav_next'><GrCaretNext /></button>
              </div>
  
  
          </div>
  
        
        </div>
  
        <div className='content_page'>
  
            <div className='hero_content_page_wrapper'>
  
                  <h2>Romantic Movies</h2>
  
                  <div className='movie_list_container'>
                      <button className='movie_nav movie_nav_prev'><GrCaretPrevious /></button>
                      <div className='movie_list'>
  
                        {romanticMovies.map(movie =>  <Movie key={movie.imdbID} movie={ movie } />)}
  
                      </div>
                      <button className='movie_nav movie_nav_next'><GrCaretNext /></button>
                  </div>
  
                  <h2>Action Movies</h2>
  
                  <div className='movie_list_container'>
                      <button className='movie_nav movie_nav_prev'><GrCaretPrevious /></button>
                      <div className='movie_list'>
  
                        {actionMovies.map(movie =>  <Movie key={movie.imdbID} movie={ movie } />)}
  
                      </div>
                      <button className='movie_nav movie_nav_next'><GrCaretNext /></button>
                  </div>
  
  
                  <h2>Documentaries</h2>
  
                  <div className='movie_list_container'>
                      <button className='movie_nav movie_nav_prev'><GrCaretPrevious /></button>
                      <div className='movie_list'>
  
                        {documentaries.map(movie =>  <Movie key={movie.imdbID} movie={ movie } />)}
  
                      </div>
                      <button className='movie_nav movie_nav_next'><GrCaretNext /></button>
                  </div>
              
            </div>
  
  
            
          
        </div>
  
        <Footer />
  
  
      </div>
    );
}