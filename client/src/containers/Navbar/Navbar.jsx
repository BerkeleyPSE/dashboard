import React, { Component } from 'react';

// node modules
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { NAVBAR_LINKS } from './navbar_constants';
import { ColumnContainer } from '../styleguide/Containers';
import { MainHeader } from '../styleguide/Headers';
import Logo from '../reusable/Logo';
import Profile from './Profile';

// actions
import { AuthActions } from '../../actions/auth-actions';

class Navbar extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object
  };

  state = {
    promptToSwitchMode: false
  };

  render() {
    const { AuthReducer } = this.props;
    return (
      <NavbarContainer justifyContent="flex-start">
        <MainHeader>Berkeley PSE Dashboard</MainHeader>
        <Logo size="150px" />
        <ColumnContainer alignItems="flex-start">
          {NAVBAR_LINKS.map(navlink => (
            <Link key={navlink.text} to={navlink.link}>
              {navlink.text}
            </Link>
          ))}
        </ColumnContainer>
        <Profile AuthReducer={AuthReducer} />
      </NavbarContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer
});

export default connect(mapStateToProps, AuthActions)(Navbar);

const NavbarContainer = ColumnContainer.extend`
  height: 100%;
  width: 250px;
  padding: 0 10px;
  border-right: 2px solid var(--accent);
`;

const Link = styled(NavLink)`
  margin: 5px 0;
  text-decoration: none;
`;
