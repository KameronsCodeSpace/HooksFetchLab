import React, { useState, useEffect } from 'react';
import axios from 'axios'

const RandomDogBreed = () => {
    const [url, setImage] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, selectBreed] = useState('');

    const getDogBreeds = () => {
        let dogBreedAPIURL = 'https://dog.ceo/api/breeds/list/all'
        axios.get(dogBreedAPIURL)
            .then(({ data }) => {
                setBreeds(Object.keys(data.message))
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    const selectNewBreed = (event) => {
        selectBreed(event.target.value)
        console.log('Current Breed', event.target.value)
    }

    const resetSelect = () => {
        selectBreed('')
    }

    const getDogPicture = (selectedBreed) => {
        console.log(selectedBreed)

        let dogAPIURL = `https://dog.ceo/api/breeds/image/random`;
        if (selectedBreed) {
            dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
        }

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
        getDogBreeds();
    }, [])

    const handleNewDogButton = () => {
        getDogPicture(selectedBreed)
    }

        return (
            <div>
                <h1>Random Dog Breed</h1>

                <br />

                <select onChange={selectNewBreed} value={selectedBreed}>
                    <option value="">Select Breed</option>
                    {
                        breeds.map(breed => {
                            return <option value={breed}>{breed}</option>
                        })
                    }
                </select>
                <br />
                <br />

                <button onClick={handleNewDogButton}>New Dog</button>
                <button onClick={resetSelect}>Reset</button>

                <br />
                <br />

                <img key={url} src={url} alt="DogBreed"></img>

            </div>
        )
    }

export default RandomDogBreed;
