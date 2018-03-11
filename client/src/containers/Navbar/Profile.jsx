import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { ColumnContainer } from '../styleguide/Containers';
import SwitchEditInput from './SwitchEditInput';

const Profile = (props) => {
  const { AuthReducer } = props;
  return (
    <ProfileContainer>
      <ProfileHeader>Your Profile</ProfileHeader>
      <ColumnContainer alignItems="flex-start">
        <Name>{AuthReducer.name}</Name>
        <Email>{AuthReducer.email}</Email>
        <SwitchEditInput />
      </ColumnContainer>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  AuthReducer: PropTypes.object
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
  margin: 3px 0;
`;

const Email = styled.p`
  color: var(--main-alt);
  font-size: 14px;
  margin: 3px 0;
`;
