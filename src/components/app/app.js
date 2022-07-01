import React from "react";

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";

import SwapiService from "../../services/swapi-service";

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiService();

  constructor() {
    super();

    this.state = {
      selectedItem: 3
    };

    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(id) {
    this.setState({
      selectedItem: id
    })

  }

  render() {

    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row left={<PersonList
      onItemSelected={this.onItemSelected} />} right={<PersonDetails itemId={10} />} />

        <Row left={<PlanetList
      onItemSelected={this.onItemSelected}/>} right={<PlanetDetails itemId={1} />} />

        <Row left={<StarshipList onItemSelected={this.onItemSelected}  />} right={<StarshipDetails itemId={5} />} />

      </div>
    )
  }

}

const Row = ({left, right}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
       {left}
      </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>
  )
}
