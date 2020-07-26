import React from 'react';

import './ErrorIndicator.css';
import icon from '../../assets/death-star.svg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        Something has gone terribly wrong
      </span>
      <span className="error-indicator__subtitle">
        but we already sent droids to fix it
      </span>
    </div>
  );
};

export default ErrorIndicator;