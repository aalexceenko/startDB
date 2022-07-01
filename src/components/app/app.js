import React from "react";

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";

import SwapiService from "../../services/swapi-service";

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

    const itemList = (
      <ItemList
      onItemSelected={this.onItemSelected}
      getData={this.swapiService.getAllPeople}>
       { ({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})` }
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}>
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    const planetList = (
      <ItemList
      onItemSelected={this.onItemSelected}
      getData={this.swapiService.getAllPlanets}>
        { ({name, diameter}) => `${name} (diameter: ${diameter})` }
      </ItemList>
    );

    const planetDetails = (
      <ItemDetails  itemId={this.state.selectedItem} getData={this.swapiService.getPlanet} getImageUrl={this.swapiService.getPlanetImage}>
        <Record field="diameter" label="Diameter" />
        <Record field="population" label="Population" />
      </ItemDetails>
    )

    const starshiptList = (
      <ItemList
      onItemSelected={this.onItemSelected}
      getData={this.swapiService.getAllStarships} >
       { ({name}) => name} 
      </ItemList>
    );

    const starshipDetails = (
      <ItemDetails  itemId={this.state.selectedItem} getData={this.swapiService.getStarship} getImageUrl={this.swapiService.getStarshipImage}>
          <Record field="model" label="Model" />
          <Record field="crew" label="Crew" />
      </ItemDetails>
    )

    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row left={itemList} right={itemDetails} />

        <Row left={planetList} right={planetDetails} />

        <Row left={starshiptList} right={starshipDetails} />

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
