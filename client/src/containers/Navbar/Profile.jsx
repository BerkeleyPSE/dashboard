import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { ColumnContainer } from '../styleguide/Containers';
import SwitchEditInput from './SwitchEditInput';

const Profile = (props) => {
  const { user, setUserCanEdit } = props;
  return (
    <ProfileContainer>
      <ProfileHeader>Your Profile</ProfileHeader>
      <ColumnContainer alignItems="flex-start">
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
        <SwitchEditInput canEdit={user.canEdit} setUserCanEdit={setUserCanEdit} />
      </ColumnContainer>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
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
