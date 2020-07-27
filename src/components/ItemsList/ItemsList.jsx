import React, {Component} from 'react';

import './ItemsList.css';

import Spinner from '../Spinner';

export default class ItemsList extends Component {
  state = {
    itemsList: null,
  };

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then((itemsList) => {
        this.setState({
          itemsList,
        }) // TODO add catch()
      });
  }

  renderItems(items) {
    return items.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      )
    });
  }

  render() {
    const {itemsList} = this.state;

    if (!itemsList) {
      return <Spinner/>
    }

    return (
      <ul className="items-list list-group">
        {this.renderItems(itemsList)}
      </ul>
    );
  }
};
