import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router-dom";


export default function Search( { setSearchResults } ){

    const [ input, setInput ] = useState("")
    const [ foundMovies, setFoundMovies ] = useState([])
    const navigate = useNavigate()

    const handleOnchange = (e) => {
        setInput(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault() 
        setSearchResults(foundMovies.Search)
        navigate("/search_results")

    }


    useEffect(() =>{

        fetch(`http://www.omdbapi.com/?s=${input}&apikey=9ab841ac`)
        .then(response => response.json())
        .then(data => setFoundMovies(data))

      }, [input])


    return (
        <div>
            <div className="search_container">
                <form>
                    <input type='text' name="search" value={input} onChange={handleOnchange}/>
                    <button onClick={handleSubmit}> <BsSearch /></button>
                </form>
            </div>
        </div>
    )
}