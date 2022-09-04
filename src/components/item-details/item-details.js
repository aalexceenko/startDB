import React from "react";
import PropTypes from "prop-types";

import './item-details.css';

export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends React.Component {

  constructor() {
    super();

    this.state = {
      item: null,
      loading: true,
      image: null
    }

    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(item)
      })
    })
  }

  render() {
    const {item, image} = this.state;

    if (!item) {
      return <span>Select a item from a list</span>
    }

    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image" alt="" src={image} />
  
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">

            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    )
  }

}

ItemDetails.propTypes = {
  itemId: PropTypes.string,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired
}