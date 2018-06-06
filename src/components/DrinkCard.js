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
        <h2>{this.props.selectedDrinkName}</h2>
      <h2>{this.props.selectedDrinkType}</h2>
      <img src={this.props.selectedDrinkSrc} alt={this.props.selectedDrinkName} width='200px'/>
      <h2>{this.props.selectedDrinkGlass}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
let object = state.selVal.drinkInfoArray;

const object2 = object[0];

function accessToDrinkName(){
  if(object2 !== undefined){  //If I did not see in this way, it said me that object3 was undefined
  return object2.strDrink;
  }
}

function accessToDrinkType(){
  if(object2 !== undefined){
  if(object2.strCategory == 'Other/Unknown'){
    return '';
    } else{
    return object2.strCategory;
    }

  }
}

function accessToDrinkSrc(){
  if(object2 !== undefined){
  return object2.strDrinkThumb;
  }
}

function accessToDrinkGlass(){
  if(object2 !== undefined){
  return `Serve it in a ${object2.strGlass}`;
  }
}


  return {
  selectedDrinkName: accessToDrinkName(),
  selectedDrinkType: accessToDrinkType(),
  selectedDrinkSrc: accessToDrinkSrc(),
  selectedDrinkGlass: accessToDrinkGlass()
  }
}

export default connect(mapStateToProps, { changeSelectText })(DrinkCard)
