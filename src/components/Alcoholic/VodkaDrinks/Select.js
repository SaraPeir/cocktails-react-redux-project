import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { changeVodkaSelectText } from '../../../actions';


class SelectVodka extends Component {

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
        <select value = {this.props.selectedOption} onChange = {this.props.changeVodkaSelectText}><option>Vodka drinks</option>{this.createOptions()}</select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrayList: state.dataVodka.drinksDataVodka,
    selectedOption: state.selValVodka.selectVodkaValue
  }

}

export default connect(mapStateToProps, { changeVodkaSelectText })(SelectVodka)
