import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { ColumnContainer } from './styleguide/Containers';
import { MainHeader } from './styleguide/Headers';
import Logo from './reusable/Logo';

// actions
import { AuthActions } from '../actions/auth-actions';

class Login extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object
  };

  componentDidMount() {
    const { AuthReducer } = this.props;
    if (AuthReducer.isLoggedIn) this.props.history.replace('/home');
  }

  render() {
    return (
      <ColumnContainer>
        <Logo />
        <Header>
          UC Berkeley <br />Pi Sigma Epsilon, Zeta Chi Chapter <br /> Website Dashboard
        </Header>
        <LoginButton href="/auth/google">Sign In with Google</LoginButton>
      </ColumnContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer
});

export default connect(mapStateToProps, AuthActions)(Login);

const Header = MainHeader.extend`
  font-size: 2.5rem;
  text-align: center;
`;

const LoginButton = styled.a`
  background-color: var(--accent);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: var(--white);
  font-size: 24px;
  padding: 20px 40px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
