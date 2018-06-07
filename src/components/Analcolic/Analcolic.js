import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import DrinkCard from './DrinkCard';
import Select from './Select';

class Analcolic extends Component {

  render() {
    return (
      <div>
        <Select />
      <DrinkCard />

      </div>
    );
  }
}

export default Analcolic;
