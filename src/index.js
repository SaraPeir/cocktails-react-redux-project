import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reducers from './reducers';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(

  <Provider store={store}>
<BrowserRouter>
    <App />

    </BrowserRouter>
</Provider>
  , document.querySelector('body'));

  // function render(){ //redux
  // ReactDOM.render(
  //   <BrowserRouter>
  //   <Provider store={store}>
  //       <App />
  //   </Provider>
  //     </BrowserRouter>
  // , document.getElementById('root'));
  //  } //redux
  //
  // store.subscribe(render);//redux
  // render();//redux

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('body'));

export default store;
