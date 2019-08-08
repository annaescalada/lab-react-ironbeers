import React, { Component } from 'react';
import beerService from '../Services/BeerService'
import Header from '../Components/Header';

class SingleBeer extends Component {
  state = {
    beer: null,
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    beerService.getOneBeer(id)
      .then((response) => {
        const beerFromApi = response.data;
        this.setState({
          beer: beerFromApi,
        })
        console.log(this.state.beer)
      })
  }
  
  render() {
    const { beer } = this.state;
    return (
      <>
        <Header/>
        <h2>Beer Details</h2>
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
      </>
    )
  }
}

export default SingleBeer;
