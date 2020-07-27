import React from 'react';

import {transformPropKeyToName} from '../../helpers/functions';

const Record = ({value, propName}) => (
  <li className="list-group-item">
    <span className="term">{transformPropKeyToName(propName)}</span>
    <span className="value">{value}</span>
  </li>
);

export default Record;