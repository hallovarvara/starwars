import React from 'react';

import SwapiService from '../../services/SwapiService';
import ItemDetails from '../ItemDetails';

const swapiService = new SwapiService();

const {
  getChar,
  getPlanet,
  getStarship,
} = swapiService;

const CharDetails = ({id}) => <ItemDetails id={id} getData={getChar} />
const PlanetDetails = ({id}) => <ItemDetails id={id} getData={getPlanet} />
const StarshipDetails = ({id}) => <ItemDetails id={id} getData={getStarship} />

export {
  PlanetDetails,
  CharDetails,
  StarshipDetails,
}