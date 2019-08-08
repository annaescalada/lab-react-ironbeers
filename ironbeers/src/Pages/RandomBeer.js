import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import beerService from '../Services/BeerService'
import Header from '../Components/Header';

class RandomBeer extends Component {
  state = {
    beer: null,
  }
  componentDidMount() {
    beerService.getRandomBeer()
    .then((response) => {
      const beerFromApi = response.data;
      console.log(beerFromApi)
      this.setState({
        beer: beerFromApi,
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const {beer} = this.state;
    return (
    <>
    <Header/>
    <section className='container'>
    {beer ?
          <section className='beer-details'>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.originalText}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
          </section>
          : <p>Loading...</p>
        }
    </section>
    </>
    )
  }
}

export default RandomBeer;
