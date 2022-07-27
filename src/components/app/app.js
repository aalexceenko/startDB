import React from "react";

import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import {
        StarshipsPage,
        PeoplePage,
        PlanetsPage
} from "../pages";
import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {

    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <Header /> 
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </SwapiServiceProvider>
      </div>
    )
  }

}

