import React, { Component } from 'react';

// node modules
import { Link } from 'react-router-dom';
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
    const { AuthReducer, setUserEditMode, logoutUser } = this.props;
    return (
      <NavbarContainer justifyContent="flex-start" alignItems="space-between">
        <MainHeader>Berkeley PSE Dashboard</MainHeader>
        <Logo size="125px" />
        <LinkContainer alignItems="flex-start">
          {NAVBAR_LINKS.map(navlink => (
            <NavLink key={navlink.text} to={navlink.link}>
              {navlink.text}
            </NavLink>
          ))}
        </LinkContainer>
        <Profile user={AuthReducer} setUserEditMode={setUserEditMode} logoutUser={logoutUser} />
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

const LinkContainer = ColumnContainer.extend`
  margin: 20px 0;
`;

const NavLink = styled(Link)`
  color: var(--main);
  margin: 5px 0;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    color: var(--accent-alt);
  }
`;
