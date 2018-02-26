import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// components
import { NAVBAR_LINKS } from './navbar_constants';
import { ColumnContainer } from '../styleguide/Containers';

export default class Navbar extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object
  };

  render() {
    return (
      <NavbarContainer>
        <h1>Berkeley Pi Sigma Epsilon Dashboard</h1>
        <ColumnContainer alignItems="baseline">
          {NAVBAR_LINKS.map(navlink => (
            <Link key={navlink.text} to={navlink.link}>
              {navlink.text}
            </Link>
          ))}
        </ColumnContainer>
      </NavbarContainer>
    );
  }
}

const NavbarContainer = styled.div`
  height: 100%;
  width: 200px;
  padding: 10px;
  border-right: 2px solid var(--purple);
`;

const Link = styled(NavLink)`
  margin: 5px 0;
  text-decoration: none;
`;
