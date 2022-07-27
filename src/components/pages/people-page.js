import React from "react";
import {
  PersonList,
  PersonDetails
} from '../sw-components';
import Row from "../row";

export default class PeoplePage extends React.Component {
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
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />

    )
  }
}