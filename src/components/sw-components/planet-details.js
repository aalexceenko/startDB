import React from "react";
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helper";


const PlanetDetails = ({itemId, swapiService}) => {
  const {getPlanet, getPlanetImage} = swapiService;

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

export default withSwapiService(PlanetDetails);
