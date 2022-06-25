export default class SwapiService {
  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
  
    return body; 
  }

  async getAllPeople() {
    const res = await this.getResource(`https://swapi.dev/api/people/`);
    // console.log(res.results.map(this._transformPerson));
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`https://swapi.dev/api/people/${id}/`);
    // console.log(this._transformPlanet(person));

    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`https://swapi.dev/api/planets/`);
    console.log(res.results.map(this._transformPlanet));

    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`https://swapi.dev/api/planets/${id}/`);
    // console.log(this._transformPlanet(planet));
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`https://swapi.dev/api/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`https://swapi.dev/api/starships/${id}/`);
    return this._transformStarship(starship);
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

const swapiService = new SwapiService();

swapiService.getPerson(3)
              .then((person) => {
                // console.log(person)
              })