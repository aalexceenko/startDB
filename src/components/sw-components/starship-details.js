import React from "react";
import ItemDetails from '../item-details';
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";
import { useParams } from 'react-router-dom';


const StarshipDetails = (props) => {
  const { id } = useParams();

  console.log(id);

  return (
    
    <ItemDetails {...props} itemId={Number(id)} >
        <Record field="model" label="Model" />
        <Record field="crew" label="Crew" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}


export default withSwapiService(StarshipDetails, mapMethodsToProps);