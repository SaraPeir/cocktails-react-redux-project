import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { updateInfoNoAlc } from './actions';
import { updateInfoGin } from './actions';
import { changeSelectText } from './actions';
import DrinkCard from './components/Analcolic/DrinkCard';
import Select from './components/Analcolic/Select';
import Analcolic from './components/Analcolic/Analcolic';
import Alcoholic from './components/Alcoholic/Alcoholic';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class App extends Component {
  componentWillMount() {
    this.props.updateInfoNoAlc(),
    this.props.updateInfoGin()
  }

  // componentWillMount() {
  //
  //     this.props.updateInfoGin()
  // }

renderize(){
  setTimeout(this.renderUsersList.bind(this), 3000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
}

renderizeGin(){
  setTimeout(this.renderUsersListGin.bind(this), 4000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
}

  renderUsersList() {
    if(this.props.arrayListNoAlc3 !== undefined){
      return console.log(this.props.arrayListNoAlc3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
    } else {return console.log('this.props.arrayListNoAlc3 no definido')}}

    renderUsersListGin() {
      if(this.props.arrayListGin3 !== undefined){
        return console.log('this.props.arrayListGin3', this.props.arrayListGin3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
      } else {return console.log('this.props.arrayListGin3 no definido')}}



  render() {
    return (
      <div className="App">
  {this.renderize()}
{this.renderizeGin()}
    <Menu />
      <Switch>
      <Route exact path='/' component={ Alcoholic } />
      <Route path='/analcolic' component={ Analcolic } />
      </Switch>

      </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    arrayListNoAlc: state.dataNoAlc.drinksDataNoAlc,
    //[nombrePropriedad] = [state].[nombreElementoIzqInrootReducer(reducers/index.js)].[nombreElementoQueCambia(initialState in firstArrayDrinks)]
    arrayListNoAlc2: state.dataNoAlc.drinksDataNoAlc2,
    arrayListNoAlc3: state.dataNoAlc.drinksDataNoAlc3,
    arrayListGin3: state.dataGin.drinksDataGin3
  }
}


// así podemos implementar React Redux con Router

export default withRouter(connect(mapStateToProps, { updateInfoNoAlc, updateInfoGin})(App));
