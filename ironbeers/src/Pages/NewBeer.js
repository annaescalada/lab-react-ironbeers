import React, { Component } from 'react';
import beerService from '../Services/BeerService'
import Header from '../Components/Header';

class NewBeer extends Component {
  state = {
    beer: null,
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    beerService.getNewBeer(id)
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
        <h2>Card Details</h2>
        {/* {card ?
          <section className='card-details'>
            <img src={card.imageUrl} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.type}</p>
            <p>{card.originalText}</p>
          </section>
          : <p>Loading...</p>
        } */}
      </>
    )
  }
}

export default NewBeer;