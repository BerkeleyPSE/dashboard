import React, { Component } from 'react';

// node modules
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// local components
import Home from './Home';
import Login from './Login';

class Routes extends Component {
  componentDidMount() {}

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
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        {/* Footer */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer
});

export default withRouter(connect(mapStateToProps, null)(Routes));
