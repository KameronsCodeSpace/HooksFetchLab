import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import RandomDog from "./Components/RandomDog";
import MultipleRanDogs from "./Components/MultipleRanDogs";
import RandomDogBreed from "./Components/RandomDogBreed";
import RandomCat from "./Components/RandomCat";
import MultipleRanCats from "./Components/MultipleRanCats";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/RandomDog" component={RandomDog} />
          <Route path="/MultipleRanDogs" component={MultipleRanDogs} />
          <Route path="/RandomDogBreed" component={RandomDogBreed} />
          <Route path="/RandomCat" component={RandomCat} />
          <Route path="/MultipleRanCats" component={MultipleRanCats} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
};

export default App;
