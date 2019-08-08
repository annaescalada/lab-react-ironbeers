import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/',
    })
  }

  getAllBeers() {
    return this.beer.get('beers')
      .then(response => response);
  }

  getOneBeer(id) {
    return this.beer.get(`beers/${id}`)
      .then(response => response)
  }

  getRandomBeer() {
    return this.beer.get(`beers/random`)
      .then(response => response)
  }

  getNewBeer() {
    return this.beer.get(`new`)
      .then(response => response)
  }

}

const beerService = new BeerService();

export default beerService;