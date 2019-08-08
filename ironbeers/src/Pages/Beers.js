import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Components/Header';
import beerService from '../Services/BeerService'
class Beers extends Component {
  state = {
    beers: [],
  }
  componentDidMount() {
    beerService.getAllBeers()
    .then((response) => {
      const beersFromApi = response.data;
      this.setState({
        beers: beersFromApi,
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const {beers} = this.state;
    return (
    <>
    <Header/>
    <section className='container'>
      {beers.length > 0?
      
      beers.map(beer => {
        return (
          <article key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name}/>
            </Link>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </article>
        )
      }) 

      : <p>Loading...</p>
    }
    </section>
    </>
    )
  }
}

export default Beers;
