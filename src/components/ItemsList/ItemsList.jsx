import React from 'react';

import './ItemsList.css';

import SwapiService from '../../services/SwapiService';
import { withData } from '../../helpers/hoc/';

const ItemsList = ({data, renderItem, onItemSelected}) => {
  return (
    <ul className="items-list list-group">
      {
        data.map((item) => {
          const {id} = item;
          const label = renderItem(item);

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

const { getAllChars } = new SwapiService();

export default withData(ItemsList, getAllChars);