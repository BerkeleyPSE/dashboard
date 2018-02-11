import React from 'react';

// node modules
import { BrowserRouter as Router, Route } from 'react-router-dom';

// local components
import Routes from './containers/Routes';

const App = () => (
  <Router>
    <Route component={Routes} />
  </Router>
);

export default App;
