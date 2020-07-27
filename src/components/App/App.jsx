import React, {Component} from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import ItemDetails from '../ItemDetails/ItemDetails';
import Row from '../../basicComponents/Row';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';

export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    selectedItem: 2,
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  renderCharInList = ({name, gender, birthYear}) =>
    `${name} (${gender}, ${birthYear})`;

  renderPlanetInList = ({name, diameter}) =>
    `${name} (diameter ${diameter})`;

  renderStarshipInList = ({name, model}) =>
    `${name} (${model})`;

  render() {
    const itemsList = (
      <ItemsList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllChars}
        renderItem={this.renderCharInList}
      />
    );

    const itemDetails = (
      <ItemDetails
        id={this.state.selectedItem}
        getData={this.swapiService.getChar}
      />
    );

    return (
      <ErrorBoundry>
        <Header />
        <RandomPlanet />
        <Row left={itemsList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
