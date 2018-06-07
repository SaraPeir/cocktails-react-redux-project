import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { changeSelectText } from '../actions';


class Select extends Component {

  createOptions(){
    let array = this.props.arrayList;
    if(array !== undefined && array.length > 0){
        let options = array.map( (x, index) => <option key={index}> {x.strDrink}</option>);
        return options;
      }
  }

  render() {
    return (
      <div>
        <select value = {this.props.selectedOption} onChange = {this.props.changeSelectText}><option>Analcolic drinks</option>{this.createOptions()}</select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrayList: state.data.drinksData,
    selectedOption: state.selVal.selectValue
  }

}

export default connect(mapStateToProps, { changeSelectText })(Select)
