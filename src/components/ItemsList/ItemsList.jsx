import React from 'react';

import './ItemsList.css';

const ItemsList = ({data, onItemSelected, renderValue}) => {
  return (
    <ul className="items-list list-group">
      {
        data.map((item) => {
          const {id} = item;
          const label = renderValue(item);

          return (
          <li
            className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}
          >
            {label}
          </li>
          )
        })
      }
    </ul>
  );
};

export default ItemsList;