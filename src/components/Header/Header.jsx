import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex justify-content-center">
      <h3>
        <a href="#" />
      </h3>
      <ul className="header__navigation d-flex">
        <li className="header__link">
          <a href="#">Characters</a>
        </li>
        <li className="header__link">
          <a href="#">Planets</a>
        </li>
        <li className="header__link">
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;