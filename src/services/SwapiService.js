import imagePlugPath from '../assets/image-plug.jpg';

export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const result = await fetch(`${this._apiBase}/${url}`);
    if (!result.ok) {
      console.error(`Couldn't fetch ${url}, received ${result.status}`);
    }
    return await result.json();
  }

  getAllChars = async () => {
    const result = await this.getResource('people');
    return result.results.map((char) => (
      this._transformChar(char)
    ));
  }

  getChar = async (id) => {
    const char = await this.getResource(`people/${id}`);
    char.imagePath = await this._getImagePath(id, 'characters');
    return this._transformChar(char);
  }

  getAllPlanets = async () => {
    const result = await this.getResource('planets');
    return result.results.map((planet) => (
      this._transformPlanet(planet)
    ));
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}`);
    planet.imagePath = await this._getImagePath(id, 'planets');
    return this._transformPlanet(planet);
  }

  getAllStarships = async () =>  {
    const result = await this.getResource('starships');
    return result.results.map((starship) => (
      this._transformStarship(starship)
    ));
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}`);
    starship.imagePath = await this._getImagePath(id, 'starships');
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _getImagePath = async (id, category) => {
    const url = `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;
    let path;
    try {
      const result = await fetch(url);
      path = (result.ok) ? url : imagePlugPath;
    } catch {
      path = imagePlugPath;
    }
    return path;
  }

  _transformChar = (char) => {
    return {
      id: this._extractId(char),
      name: char.name,
      gender: char.gender,
      birthYear: char.birth_year,
      eyeColor: char.eye_color,
      imagePath: char.imagePath,
    }
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imagePath: planet.imagePath,

    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
      imagePath: starship.imagePath,
    }
  }
}
