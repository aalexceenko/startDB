import React from "react";
import {
  PlanetList,
  PlanetDetails
} from '../sw-components';
import Row from "../row";

export default class PlanetsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedItem: null
    };
    
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(id) {
    this.setState({
      selectedItem: id
    })

  }

  render() {
    
    const {selectedItem} = this.state;

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />

    )
  }
}