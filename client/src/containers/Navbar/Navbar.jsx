import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// components
import { NAVBAR_LINKS } from './navbar_constants';
import { ColumnContainer } from '../styleguide/Containers';
import { MainHeader } from '../styleguide/Headers';

export default class Navbar extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object
  };

  render() {
    return (
      <NavbarContainer>
        <MainHeader>Berkeley PSE Dashboard</MainHeader>
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
  width: 175px;
  padding: 0 10px;
  border-right: 2px solid var(--accent);
`;

const Link = styled(NavLink)`
  margin: 5px 0;
  text-decoration: none;
`;
