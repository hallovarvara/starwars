import React, {Component} from 'react';

import './ItemDetails.css';

import ItemDetailsView from './ItemDetailsView';
import Spinner from '../Spinner';

export default class ItemDetails extends Component {
  state = {
    item: null,
    isItemLoaded: false,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.updateItem();
    }
  }

  updateItem() {
    this.setState({
      isItemLoaded: false,
    })

    const { id, getData } = this.props;

    if (id && getData) {
      getData(id)
      .then((item) => {
        this.setState({
          item,
          isItemLoaded: true
        })
      })
    }
  }

  render() {
    const { item, isItemLoaded } = this.state;

    if (!item) {
      return <span>Select from a list</span>
    }

    return (
      isItemLoaded
        ? <ItemDetailsView item={item} />
        : <Spinner />
    )
  }
}
