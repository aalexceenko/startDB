import React from "react";
import PropTypes from "prop-types";

import './item-list.css';

const ItemList = (props) => {

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

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}


export default ItemList;