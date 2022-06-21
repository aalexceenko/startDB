export default class SwapiServie {
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
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`https://swapi.dev/api/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`https://swapi.dev/api/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`https://swapi.dev/api/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`https://swapi.dev/api/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`https://swapi.dev/api/starships/${id}/`);
  }
}

const swapi = new SwapiServie();

swapi.getAllPlanets().then((people) => {
  people.forEach(person => {
    console.log(person.name);
  });
});
swapi.getPerson(2).then((person) => {

    console.log('2', person.name);

});
// console.log(swapi.getAllPeople());