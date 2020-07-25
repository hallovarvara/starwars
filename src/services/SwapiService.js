export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const result = await fetch(this._apiBase + url);
    if (!result.ok) {
      console.error(`Couldn't fetch ${url}, received ${result.status}`);
    }
    return await result.json();
  }

  async getAllChars() {
    const result = await this.getResource('/people/');
    return result.results.map((char) => (
      this._transformChar(char)
    ));
  }

  async getChar(id) {
    const char = await this.getResource(`/people/${id}`);
    return this._transformChar(char);
  }

  async getAllPlanets() {
    const result = await this.getResource('/planets/');
    return result.results.map((planet) => (
      this._transformPlanet(planet)
    ));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const result = await this.getResource('/starships/');
    return result.results.map((starship) => (
      this._transformStarship(starship)
    ));
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformPlanet(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformChar(char) {
    return {
      id: this._extractId(char),
      name: char.name,
      gender: char.gender,
      birthYear: char.birthYear,
      eyeColor: char.eyeColor
    }
  }
}
