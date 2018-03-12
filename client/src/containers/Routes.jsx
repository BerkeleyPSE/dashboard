import React, { Component } from 'react';

// node modules
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';

// local components
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Login from './Login';
import Applications from './Applications';
import Brothers from './Brothers/Brothers';
import Fulltime from './Fulltime';
import Internship from './Internship';
import Faqs from './Faqs';
import Regforms from './Regforms';
import Banner from './Banner';

// actions
import { AuthActions } from '../actions/auth-actions';

class Routes extends Component {
  static propTypes = {
    AuthReducer: propTypes.object
  };

  componentDidMount() {
    this.props.getUser();
    const { location, AuthReducer } = this.props;
    if (!AuthReducer.isLoggedIn && location.pathname !== '/login') {
      this.redirectTo(this.props, '/login');
    } else if (location.pathname === 'login' && AuthReducer.isLoggedIn) {
      this.redirectTo(this.props, '/');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location, AuthReducer } = nextProps;
    if (!AuthReducer.isLoggedIn && location.pathname !== '/login') {
      this.redirectTo(nextProps, '/login');
    } else if (location.pathname === 'login' && AuthReducer.isLoggedIn) {
      this.redirectTo(this.props, '/');
    }
  }

  redirectTo = (props, path) => {
    props.history.replace(path);
  };

  render() {
    const { AuthReducer } = this.props;
    return AuthReducer.isLoggedIn ? (
      <RoutesContainer>
        <Banner inEditMode={AuthReducer.canEdit} />
        <Navbar />
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
      </RoutesContainer>
    ) : (
      <Route exact path="/login" component={Login} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer
});

export default withRouter(connect(mapStateToProps, AuthActions)(Routes));

const RoutesContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(40px, auto) 1fr;
  grid-template-columns: 250px 1fr;
`;
