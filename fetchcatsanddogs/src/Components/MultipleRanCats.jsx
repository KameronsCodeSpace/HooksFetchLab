import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultipleRanCats = () => {
    const [urls, setImage] = useState([]);
    const [number, setNumber] = useState(1);

    const getCatPictures = (number) => {

        let catAPIURL = `https://api.thecatapi.com/v1/images/search?limit=${number}`;

        axios
            .get(catAPIURL)
            .then(({ data }) => {
                console.log(data)

                setImage(data)

            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    useEffect(() => {
        getCatPictures();
    }, [])

    const selectNewNumber = (event) => {
        setNumber(event.target.value)

        console.log('Current Number', number)
    }

    const handleNewCatButton = () => {
        getCatPictures(number)
    }

        return (
            <div className="App">
                <h1>Multiple Random Cats</h1>

                <br />

                <input type="number" min="1" max="10" onChange={selectNewNumber} value={number} />

                <br />
                <br />
                <button onClick={handleNewCatButton}>New Cats</button>
                <br />
                <br />

                {
                    urls.map(url => {
                        return <img key={url.id} src={url.url} alt="cat" />
                    })
                }
            </div>
        );
    }

export default MultipleRanCats;
