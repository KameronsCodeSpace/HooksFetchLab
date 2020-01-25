import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultipleRanDogs = () => {
    const [urls, setImage] = useState([]);
    const [number, setNumber] = useState(1);


    const getDogPictures = (number) => {

        let dogAPIURL = `https://dog.ceo/api/breeds/image/random/${number}`;

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
        getDogPictures();
    }, [])

    const selectNewNumber = (event) => {
        setNumber(event.target.value)

        console.log('Current Number', number)
    }

    const handleNewDogButton = () => {
        getDogPictures(number)
    }
    
    return (
        <div className="App">
            <h1>Multiple Random Dogs</h1>

            <br />

            <input type="number" min="1" max="10" onChange={selectNewNumber} value={number} />

            <br />
            <br />
            <button onClick={handleNewDogButton}>New Dogs</button>
            <br />
            <br />

            {
                urls.map(url => {
                    return <img key={url} src={url} alt="dog" />
                })
            }
        </div>
    );
}


export default MultipleRanDogs;
