// import React from 'react';
// import '../App.css';

// function RandomCat() {
//     return (
//         <div>
//             <h1>Random Cat</h1>
//         </div>
//     );
// }

// export default RandomCat;

import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class RandomCat extends Component {
    constructor() {
        super();
        this.initialState = {
            url: []
        }
        this.state = this.initialState
    }

    componentDidMount() {
        this.getCatPicture();
    }

    handleNewCatButton = () => {
        this.getCatPicture();
    }

    getCatPicture = () => {

        let catAPIURL = `https://api.thecatapi.com/v1/images/search`;

        axios
            .get(catAPIURL)
            .then(({ data }) => {
                console.log(data[0].url)

                this.setState({
                    url: data[0].url,
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    render() {
        const { url } = this.state

        return (
            <div className="App">
                <h1>Random Cat Pictures</h1>

                <br />

                <button onClick={this.handleNewCatButton}>New Cat</button>

                <br />
                <br />

                <img src={url} alt="RandomCat"></img>

            </div>
        )
    }
}
export default RandomCat;