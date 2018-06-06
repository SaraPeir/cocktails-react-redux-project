import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions';
import { changeSelectText } from '../actions';
import store from '../index.js';


class DrinkCard extends Component {


  render() {
    return (
      <div>
        <h2>{this.props.selectedDrink}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    selectedDrink: state.selVal.selectValue
  }
}

export default connect(mapStateToProps, { changeSelectText })(DrinkCard)
