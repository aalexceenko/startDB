import React from "react";
import {
  PersonList,
  PersonDetails
} from '../sw-components';
import { useNavigate, useParams } from "react-router-dom";
import Row from "../row";

const PeoplePage = () => {

  const history = useNavigate();
  const { id } = useParams();


    return (
      <Row
        left={<PersonList onItemSelected={(id) => {
          console.log(id);
          console.log(33);

          history(`/people/${id}`, { replace: true });
        }}

          />}
        right={<PersonDetails itemId={id} />}
      />

    )
  
}

export default PeoplePage;