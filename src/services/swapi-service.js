export default class SwapiService {
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
  
    return body; 
  }

  getAllPeople = async () => {
    const res = await this.getResource(`https://swapi.dev/api/people/`);
    console.log('People ', res.results.map(this._transformPerson));
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`https://swapi.dev/api/people/${id}/`);
    // console.log(this._transformPlanet(person));

    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`https://swapi.dev/api/planets/`);
    console.log('Planets ', res.results.map(this._transformPlanet));

    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`https://swapi.dev/api/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`https://swapi.dev/api/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`https://swapi.dev/api/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getPersonImage = ({id}) => {
     return (`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
  }

  getStarshipImage = ({id}) => {
    return (`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
  }

  getPlanetImage = ({id}) => {
    return (`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }
}
