import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class MultipleRanDogs extends Component {
    constructor() {
        super();
        this.initialState = {
            urls: [],
            number: 1
        }
        this.state = this.initialState
    }

    componentDidMount() {
        this.getDogPictures()
    }

    selectNewNumber = (event) => {
        const newNumber = event.target.value
        this.setState({
            number: newNumber
        })
        console.log('Current Number', newNumber)
    }

    handleNewDogButton = () => {
        const { number } = this.state
        this.getDogPictures(number)
    }

    getDogPictures = (number) => {

        let dogAPIURL = `https://dog.ceo/api/breeds/image/random/${number}`;

        axios
            .get(dogAPIURL)
            .then(({ data }) => {
                console.log(data.message)

                this.setState({
                    urls: data.message,
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }


    render() {
        const { urls, number } = this.state

        return (
            <div className="App">
                <h1>Multiple Random Dogs</h1>

                <br />

                <input type="number" min="1" max="10" onChange={this.selectNewNumber} value={number} />

                <br />
                <br />
                <button onClick={this.handleNewDogButton}>New Dogs</button>
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
}

export default MultipleRanDogs;
