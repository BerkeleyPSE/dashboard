import React, { Component } from 'react';

// node modules
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

// local components
import Home from './Home';
import Login from './Login';
import Applications from './Applications';
import Brothers from './Brothers';
import Fulltime from './Fulltime';
import Internship from './Internship';
import Faqs from './Faqs';
import Regforms from './Regforms';

class Routes extends Component {
  static propTypes = {
    AuthReducer: propTypes.object
  };

  componentDidMount() {
    // check for authorization
  }

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
            <Route exact path="/applications" component={Applications} />
            <Route exact path="/brothers" component={Brothers} />
            <Route exact path="/fulltime" component={Fulltime} />
            <Route exact path="/internship" component={Internship} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/regforms" component={Regforms} />
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
