import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to='/beers'>
        <h1>All Beers</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id placeat! Rem blanditiis consequatur labore accusamus quae odit tempora adipisci aperiam ipsa. Facere hic at eveniet accusantium fugiat sed.</p>
      <Link to='/random-beer'>
        <h1>Random Beer</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id placeat! Rem blanditiis consequatur labore accusamus quae odit tempora adipisci aperiam ipsa. Facere hic at eveniet accusantium fugiat sed.</p>
      <Link to='/new-beer'>
        <h1>New Beer</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id placeat! Rem blanditiis consequatur labore accusamus quae odit tempora adipisci aperiam ipsa. Facere hic at eveniet accusantium fugiat sed.</p>
    </div>
  )
}

export default Home
