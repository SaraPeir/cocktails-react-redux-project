import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { updateInfo } from './actions';

class App extends Component {
  componentWillMount() {
    this.props.updateInfo()
  }

  showResponse(){
    if(this.props.arrayList !== undefined && this.props.arrayList.length > 0){
      return <p>{this.props.arrayList[0].strDrink}</p>
    }
  }

  renderUsersList() {
if(this.props.arrayList3 !== undefined && this.props.arrayList3.length > 0){
    //return console.log('result', this.props.arrayList3.map((y, index) => <p key={index}> {y.drinks[0].strDrink} </p>))
return this.props.arrayList3.map((y, index) => <p key={index}> {y[0].strDrink} </p>)

  } else {return 'this.props.arrayList3 no definido'}}



  render() {
    return (
      <div className="App">
        Hola

      </div>
    );
  }
}


function mapStateToProps(state) {
    // console.log('drinksData: ', state.data.drinksData );
    // console.log('drinksData2: ', state.data.drinksData2 );
    // console.log('drinksData3: ', state.data.drinksData3 );

  return {
    arrayList: state.data.drinksData,
    //[nombrePropriedad] = [state].[nombreElementoIzqInrootReducer(reducers/index.js)].[nombreElementoQueCambia(initialState in firstArrayDrinks)]
    arrayList2: state.data.drinksData2,
    arrayList3: state.data.drinksData3

  }
}

export default connect(mapStateToProps, { updateInfo })(App)
