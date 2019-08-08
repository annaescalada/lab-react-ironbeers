import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Beers from '../src/Pages/Beers'
import RandomBeer from '../src/Pages/RandomBeer'
import NewBeer from '../src/Pages/NewBeer'
import SingleBeer from './Pages/SingleBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/beers' exact component={Beers}/>
        <Route path='/beers/:id' exact component={SingleBeer}/>
        <Route path='/random-beer' exact component={RandomBeer}/>
        <Route path='/new-beer' exact component={NewBeer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
