import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokeId: 1
    }
  }

  componentDidMount = () => {
    this.getPokemon()
  }

  getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2`)
      .then(res => this.setState({
        pokemon: res.data
      }))
      .catch(err => console.log(err))
  }

  handleInc = () => {
    this.setState({
      pokeId: this.state.pokeId + 1
    })
    this.getPokemon()
  }

  handleDec = () => {
    this.setState({
      pokeId: this.state.pokeId - 1
    })
    this.getPokemon()
  }

  render() {
    const { pokemon, pokeId } = this.state
    return (
      <div className='App'>
        <img className='pokemon-logo' src='https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png' alt='Pokemon' />

        {pokemon.name
          ? (
            <div>
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          )
          : null
        }

        <button onClick={() => this.handleInc} >Next</button>
        <button onClick={() => this.handleDec}>Prev</button>
      </div>
    )
  }
}

export default App;
