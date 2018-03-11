import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { ColumnContainer } from '../styleguide/Containers';
import SwitchEditInput from './SwitchEditInput';

const Profile = (props) => {
  const { user, setUserCanEdit, logoutUser } = props;
  return (
    <ProfileContainer>
      <ProfileHeader>Your Profile</ProfileHeader>
      <ColumnContainer alignItems="flex-start">
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
        <SwitchEditInput canEdit={user.canEdit} setUserCanEdit={setUserCanEdit} />
      </ColumnContainer>
      <LogoutButton onClick={logoutUser}>Sign Out</LogoutButton>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
  setUserCanEdit: PropTypes.func.isRequired
};

export default Profile;

const ProfileContainer = ColumnContainer.extend`
  margin: 20px 0;
  width: 100%;
`;

const ProfileHeader = styled.h3`
  color: var(--main);
  font-size: 16px;
  margin: 5px 0;
  text-transform: uppercase;
  text-decoration: underline;
`;

const Name = styled.p`
  color: var(--accent);
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

const Email = styled.p`
  color: var(--main-alt);
  font-size: 14px;
  margin: 5px 0;
`;

const LogoutButton = styled.a`
  background-color: var(--accent);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: var(--white);
  cursor: pointer;
  font-size: 12px;
  margin: 30px 0;
  padding: 8px 16px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
