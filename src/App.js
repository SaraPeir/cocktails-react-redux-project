import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { updateInfo } from './actions';
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
    this.props.updateInfo()
  }

renderize(){
  setTimeout(this.renderUsersList.bind(this), 3000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
}

  renderUsersList() {
    if(this.props.arrayList3 !== undefined){
      return console.log(this.props.arrayList3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
    } else {return console.log('this.props.arrayList3 no definido')}}





  render() {
    return (
      <div className="App">
  {this.renderize()}
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
    arrayList: state.data.drinksData,
    //[nombrePropriedad] = [state].[nombreElementoIzqInrootReducer(reducers/index.js)].[nombreElementoQueCambia(initialState in firstArrayDrinks)]
    arrayList2: state.data.drinksData2,
    arrayList3: state.data.drinksData3
  }
}


// así podemos implementar React Redux con Router

export default withRouter(connect(mapStateToProps, { updateInfo})(App));
