import React from 'react';
import ReactDOM from 'react-dom';

// node modules
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

// local components
import './index.css';
import App from './App';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
