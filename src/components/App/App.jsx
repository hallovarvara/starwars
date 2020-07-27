import React, {Component} from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import ErrorIndicator from '../ErrorIndicator';
import ItemDetails from '../ItemDetails/ItemDetails';
import Row from '../../basicComponents/Row';

import SwapiService from '../../services/SwapiService';

export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    selectedItem: 2,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
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
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

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
      <>
        <Header />
        <RandomPlanet />
        <Row left={itemsList} right={itemDetails} />
      </>
    );
  }
}
