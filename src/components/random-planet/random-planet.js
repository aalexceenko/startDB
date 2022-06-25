import React from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  constructor() {
    super();

    this.state = {
      planet: {},
      loading: true,
      error: false 
    }

    this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    this.onError = this.onError.bind(this); 
    this.updatePlanet = this.updatePlanet.bind(this); 

  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded(planet) {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  }

  onError(err) {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*20) + 3;
    this.swapiService
          .getPlanet(id)
          .then(this.onPlanetLoaded)
          .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PlanetView planet={planet} /> : null;
    const errorContent = error ? <ErrorIndicator /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorContent }
        { spinner }
        { content }
      </div>
    )
  }

}


const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
        <img className="planet-image" alt=""
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}