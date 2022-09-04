import React from "react";
import { StarshipList } from '../sw-components';
import {useNavigate} from "react-router-dom";

const StarshipsPage = () => {
  const history = useNavigate();

  return (
    <StarshipList onItemSelected={(itemId) => {

      history(itemId);
    }} />
  )

}

export default StarshipsPage;