import React from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import CharsDetails from '../CharsDetails';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemsList />
        </div>
        <div className="col-md-6">
          <CharsDetails />
        </div>
      </div>
    </div>
  );
}

export default App;