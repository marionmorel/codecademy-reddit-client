import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "./reddit-logo.svg" ;
import searchIcon from "./searchIcon.png"
import "./Header.css";

export const Header = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`r/${searchTerm}`);
    }

    return (
        <div id="header">
            <div id="logo">
                <img id="logo-img" src={logo} alt="reddit logo" />
                <Link to="/"><p><span id="reddit">Reddit</span>Client</p></Link>
            </div>
            <div id="search">
                <input 
                    type="text"
                    name="search"
                    value={searchTerm}
                    onChange={(e => setSearchTerm(e.target.value))}
                />
                <img
                    id="search-img" 
                    src={searchIcon}
                    alt="search"
                    onClick={handleClick}
                />    
            </div>
        </div>
    )
}