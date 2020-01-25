import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomDog = () => {
    const [url, setImage] = useState('');

    //get image
    const getDogPicture = () => {
        let dogAPIURL = `https://dog.ceo/api/breeds/image/random`;

        axios
            .get(dogAPIURL)
            .then(({ data }) => {
                console.log(data.message)

                setImage(data.message)

            })
            .catch((error) => {
                console.log('ERROR', error)
            })
        }


        useEffect(() => {
            getDogPicture();
        }, [])


        const handleNewDogButton = () => {
            getDogPicture();
        }

        return (
            <div className="App">
                <h1>Random Dog Pictures</h1>

                <br />

                <button onClick={handleNewDogButton}>New Dog</button>

                <br />
                <br />

                <img src={url} alt="RandomDog"></img>

            </div>
        )
    }


export default RandomDog;