import React from "react";
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";


const PlanetDetails = (props) => {

  return (
    <ItemDetails {...props}>
      <Record field="diameter" label="Diameter" />
      <Record field="population" label="Population" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
