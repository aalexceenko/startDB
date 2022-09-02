import React from "react";
import { StarshipList } from '../sw-components';
import {useNavigate} from "react-router-dom";

const StarshipsPage = () => {
  const history = useNavigate();

  return (
    <StarshipList onItemSelected={(itemId) => {
      console.log(1111);
      // const newPath = `/starships/${itemId}`;
      history(itemId);
    }} />
  )

}

export default StarshipsPage;