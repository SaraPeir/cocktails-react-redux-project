import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { updateInfo } from './actions';

class App extends Component {
  componentWillMount() {
    this.props.updateInfo()
  }

renderize(){
setTimeout(this.renderUsersList.bind(this), 3000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
}


  renderUsersList() {
if(this.props.arrayList3 !== undefined){
  return console.log(this.props.arrayList3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
  } else {return console.log('this.props.arrayList3 no definido')}}

  createOptions(){
    let array = this.props.arrayList;
    if(array !== undefined && array.length > 0){
        let options = array.map( (x, index) => <option key={index}> {x.strDrink}</option>);
        return options;
      }
  }



  render() {
    return (
      <div className="App">
        Hola

  {this.renderize()}
<select>{this.createOptions()}</select>
      </div>
    );
  }
}


function mapStateToProps(state) {
    // console.log('drinksData: ', state.data.drinksData );
    // console.log('drinksData2: ', state.data.drinksData2 );
    // console.log('drinksData3 map: ', state.data.drinksData3.map((y, index) => {y.drinks}));
//console.log('drinksData3 map: ', state.data.drinksData3.map((y, index) => {y.drinks[0].idDrink}));

  return {
    arrayList: state.data.drinksData,
    //[nombrePropriedad] = [state].[nombreElementoIzqInrootReducer(reducers/index.js)].[nombreElementoQueCambia(initialState in firstArrayDrinks)]
    arrayList2: state.data.drinksData2,
    arrayList3: state.data.drinksData3

  }
}

export default connect(mapStateToProps, { updateInfo })(App)
