import React from "react";
import { NavLink } from "react-router-dom";


export default function ErrorPage(){
    return (
        <div className="error_page_container">
            <h1>404</h1>
            <p>Page not found!</p>
            <NavLink to="/">Go back to homepage</NavLink>
        </div>
    )
}