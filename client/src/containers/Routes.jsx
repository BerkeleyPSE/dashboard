import React, { Component } from 'react';

// node modules
import { Route, Switch } from 'react-router-dom';

// local components
import Home from './Home';

export default class Routes extends Component {
  componentWillReceiveProps(nextProps) {
    // if not logged in, redirect to /login path
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        {/* Edit / Safe Mode Banner */}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Home} />
          </Switch>
        </div>
        {/* Footer */}
      </div>
    );
  }
}
