import SwapiService from '../../services/SwapiService';
import ItemsList from '../ItemsList';
import {withData} from '../../helpers/hoc';

const swapiService = new SwapiService();

const {
  getAllChars,
  getAllStarships,
  getAllPlanets,
} = swapiService;

const renderName = ({name}) => name;

const renderNameAndDiameter = ({name, diameter}) =>
  `${name} (diameter ${diameter})`;

const renderNameAndModel = ({name, model}) =>
  `${name} (${model})`;

const CharsList = withData(ItemsList, getAllChars, renderName);
const PlanetsList = withData(ItemsList, getAllPlanets, renderNameAndDiameter);
const StarshipsList = withData(ItemsList, getAllStarships, renderNameAndModel);

export {
  PlanetsList,
  CharsList,
  StarshipsList,
}