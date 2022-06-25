import React from "react";
import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";

import './item-list.css';

export default class ItemList extends React.Component {
  swapiService = new SwapiService();

  constructor() {
    super();

    this.state = {
      peopleList: null
    }
  }

  componentDidMount() {
    this.swapiService
          .getAllPeople()
          .then((peopleList) => {
            this.setState({
              peopleList
            })
          })
  }

  render() {

    const {peopleList} = this.state;

    if (!peopleList) {
      return <Spinner />
    }

    const peopleNameList = peopleList.map(({id, name}) => {
      return  <li className="list-group-item" 
                  key={id}
                  onClick={() => this.props.onItemSelected(id)}>
                    {name}
              </li>
    })

    // console.log(peopleList);
    return (
      <ul className="item-list list-group">
        { peopleNameList }
      </ul>
    )
  }

}
