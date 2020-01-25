import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const RandomCat =() => {

    const [url, setImage] = useState('');

    const handleNewCatButton = () => {
        getCatPicture();
    }

    const getCatPicture = () => {

        let catAPIURL = `https://api.thecatapi.com/v1/images/search`;

        axios
            .get(catAPIURL)
            .then(({ data }) => {
                console.log(data[0].url)

                setImage(data[0].url)
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }



    useEffect(() => {
        getCatPicture();
    }, [])

        return (
            <div className="App">
                <h1>Random Cat Pictures</h1>

                <br />

                <button onClick={handleNewCatButton}>New Cat</button>

                <br />
                <br />

                <img src={url} alt="RandomCat"></img>

            </div>
        )
    }
export default RandomCat;