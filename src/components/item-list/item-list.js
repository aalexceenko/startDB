import React from "react";
import SwapiService from "../../services/swapi-service";
import withData from "../hoc-helper/with-data";

import './item-list.css';

const ItemList = (props) => {

  console.log(props);
  const {data, onItemSelected, children: renderItem} = props;
  const itemNameList = data.map((item) => {
  const label = renderItem(item);
  return  <li className="list-group-item" 
              key={item.id}
              onClick={() => onItemSelected(item.id)}>
                {label}
          </li>
  })

  return (
    <ul className="item-list list-group">
      { itemNameList }
    </ul>
  )

}

const {getAllPeople} = new SwapiService();

export default withData(ItemList, getAllPeople);