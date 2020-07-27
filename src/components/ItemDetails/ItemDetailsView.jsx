import React from 'react';

import Record from '../../basicComponents/Record';

const ItemDetailsView = ({item}) => {
  const { id, name, imagePath, ...details } = item;

  const detailsList = Object.keys(details)
    .map((propName, i) => item[propName]
      && <Record value={item[propName]} propName={propName} key={i} />
    );

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