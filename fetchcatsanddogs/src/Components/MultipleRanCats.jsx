import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class MultipleRanCats extends Component {
    constructor() {
        super();
        this.initialState = {
            urls: [],
            number: 1
        }
        this.state = this.initialState
    }

    componentDidMount() {
        this.getCatPictures()
    }

    selectNewNumber = (event) => {
        const newNumber = event.target.value
        this.setState({
            number: newNumber
        })
        console.log('Current Number', newNumber)
    }

    handleNewCatButton = () => {
        const { number } = this.state
        this.getCatPictures(number)
    }

    getCatPictures = (number) => {

        let catAPIURL = `https://api.thecatapi.com/v1/images/search?limit=${number}`;

        axios
            .get(catAPIURL)
            .then(({ data }) => {
                console.log( data )

                this.setState({
                    urls: data,
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }


    render() {
        const { urls, number } = this.state
        console.log('These Are Urls', urls)
        return (
            <div className="App">
                <h1>Multiple Random Cats</h1>

                <br />

                <input type="number" min="1" max="10" onChange={this.selectNewNumber} value={number} />

                <br />
                <br />
                <button onClick={this.handleNewCatButton}>New Cats</button>
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
}

export default MultipleRanCats;
