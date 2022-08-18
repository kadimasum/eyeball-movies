import React from "react";
import { BsSearch } from "react-icons/bs"

export default function Search(){
    return (
        <div>
            <div className="search_container">
                <form>
                    <input type='text' name="search"/>
                    <button> <BsSearch /></button>
                </form>
            </div>
        </div>
    )
}