import React, {Component} from 'react';

import './RandomPlanet.css';

import SwapiService from '../../services/SwapiService';
import PlanetView from './PlanetView';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      isLoading: false,
    })
  }

  onError = (err) => {
    this.setState({
      isError: true,
      isLoading: false,
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, isLoading, isError } = this.state;

    return (
      <div className="random-planet jumbotron d-flex align-items-center justify-content-center">
        {
          isError
            ? <ErrorIndicator />
            : isLoading
              ? <Spinner />
              : <PlanetView planet={planet} />
        }
      </div>
    );
  }
}

