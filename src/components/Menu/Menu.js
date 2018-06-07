import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'


class Menu extends Component {

  render() {
    return (
      <div>
      <Link to={`/`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Alcoholic drinks</button></Link>
      <Link to={`/analcolic`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>No alcoholic drinks</button></Link>
      </div>
    );
  }
}

export default Menu;
