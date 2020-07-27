import React from 'react';

import {transformKeyToName} from '../../helpers/functions';

const ItemDetailsView = ({item}) => {
  const { id, name, imagePath, ...details } = item;

  const renderDetails = (key, i) => {
    if (item[key]) {
      return (
        <li className="list-group-item" key={i}>
          <span className="term">{transformKeyToName(key)}</span>
          <span className="value">{item[key]}</span>
        </li>
      )
    }
  };

  const detailsList = Object.keys(details)
    .map((key, i) => renderDetails(key, i))

  return(
    <div className="item-details card">
      <img className="image"
           src={imagePath}
           alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {detailsList}
        </ul>
      </div>
    </div>
  )
}

export default ItemDetailsView;