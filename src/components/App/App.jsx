import React, {Component} from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Row from '../../basicComponents/Row';
import ErrorBoundry from '../ErrorBoundry';

import { CharsList, PlanetsList, StarshipsList } from '../Lists';

import {CharDetails, PlanetDetails, StarshipDetails} from '../Details';

export default class App extends Component {
  state = {
    selectedItem: 5,
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const itemsList = (
      <CharsList
        onItemSelected={this.onItemSelected}
      />
    );

    const itemDetails = (
      <CharDetails id={this.state.selectedItem} />
    );

    return (
      <ErrorBoundry>
        <div className="starwars-app">
          <Header />
          <RandomPlanet />
          <Row left={itemsList} right={itemDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
