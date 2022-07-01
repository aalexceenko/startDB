import React from "react";
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helper";

const StarshipDetails = ({itemId, swapiService}) => {
  const {getStarship, getStarshipImage} = swapiService;
  
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


export default withSwapiService(StarshipDetails);