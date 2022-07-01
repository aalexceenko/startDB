import React from "react";
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";
import withData from "../hoc-helper/with-data";

import SwapiService from "../../services/swapi-service";

const swapiService =  new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>
    <Record field="diameter" label="Diameter" />
    <Record field="population" label="Population" />
  </ItemDetails>
  )
  
}

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="crew" label="Crew" />
    </ItemDetails>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}