import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';

class RandomDogBreed extends Component {
    constructor() {
        super()
        this.state = {
            url: [],
            breeds: [],
            selectedBreed: ''
        }
    }

    componentDidMount() {
        this.getDogBreeds();
        this.getDogPicture();
    }

    selectNewBreed = (event) => {
        const newBreed = event.target.value
        this.setState({
            selectedBreed: newBreed
        })
        console.log('Current Breed', newBreed)
    }

    populateSelect = () => {
        const { breeds } = this.state;
        let breedOptions = [];
        breeds.forEach((breed) => {
            breedOptions.push(
                <option>{breed}</option>
            )
        })
        return breedOptions;
    }

    getDogBreeds() {
        let dogBreedAPIURL = 'https://dog.ceo/api/breeds/list/all'
        axios.get(dogBreedAPIURL)
            .then(({ data }) => {
                this.setState({
                    breeds: Object.keys(data.message)
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    resetSelect = () => {
        this.setState({
            selectedBreed: ''
        })
    }

    getDogPicture = (selectedBreed) => {
        console.log(selectedBreed)
        this.setState({
            picturesLoading: true
        })
        let dogAPIURL = `https://dog.ceo/api/breeds/image/random`;
        if (selectedBreed) {
            dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
        }

        axios
            .get(dogAPIURL)
            .then(({ data }) => {
                console.log(data.message)

                this.setState({
                    url: data.message,
                    picturesLoading: false
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    handleNewDogButton = () => {
        const { selectedBreed } = this.state
        this.getDogPicture(selectedBreed)
    }

    render() {
        const { url, breeds, selectedBreed } = this.state;
        console.log(selectedBreed)

        return (
            <div>
                <h1>Random Dog Breed</h1>

                <br />

                <select onChange={this.selectNewBreed} value={selectedBreed}>
                    <option value="">Select Breed</option>
                    {
                        breeds.map(breed => {
                            return <option value={breed}>{breed}</option>
                        })
                    }
                </select>
                <br />
                <br />

                <button onClick={this.handleNewDogButton}>New Dog</button>
                <button onClick={this.resetSelect}>Reset</button>

                <br />
                <br />

                <img key={url} src={url} alt="DogBreed"></img>

            </div>
        )
    }
}

export default RandomDogBreed;
