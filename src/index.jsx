import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistory } from 'redux-simple-router';
import { reducers, middleware } from './redux/index.js';
import { App, Home } from './containers/index.js';


const initialState = {
  searchResults: {displayFilter:'Grid'},
  searchBar: {
    selectedValues: {
      Gender: 0,
      Services: 0,
      Orientation: 0,
      Location: 0
    }
  }
};

const history = createHashHistory();
const reduxRouterMiddleware = syncHistory(history);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, middleware.logger, middleware.thunk)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('app'));
