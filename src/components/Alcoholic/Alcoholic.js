import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Select from './GinDrinks/Select';
import DrinkCard from './GinDrinks/DrinkCard';


class Alcoholic extends Component {

  render() {
    return (
      <div>
      <h1>Alcoholic</h1>
      <Select />
<DrinkCard />
      </div>
    );
  }
}

export default Alcoholic;
