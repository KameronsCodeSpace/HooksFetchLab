import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {

const navStyle = {
    color: 'Black'
};

    return (

        <nav>
            <Link to="/"><h3>Home</h3></Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/RandomDog"><li>Random Dog</li></Link>
                <Link style={navStyle} to="/MultipleRanDogs"><li>Multiple Random Dogs</li></Link>
                <Link style={navStyle} to="/RandomDogBreed"><li>Random Dog Breed</li></Link>
                <Link style={navStyle} to="/RandomCat"><li>Random Cat</li></Link>
                <Link style={navStyle} to="/MultipleRanCats"><li>Multiple Random Cats</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;