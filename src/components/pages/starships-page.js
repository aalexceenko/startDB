import React from "react";
import {
  StarshipList,
  StarshipDetails
} from '../sw-components';
import Row from "../row";

export default class StarshipsPage extends React.Component {
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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />

    )
  }
}