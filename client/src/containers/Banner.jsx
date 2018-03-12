import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { RowContainer } from './styleguide/Containers';

const Banner = ({ inEditMode }) => (
  <BannerContainer inEditMode={inEditMode} justifyContent="space-around">
    {inEditMode ? (
      <Text>You are in EDIT MODE. Changes you make are live.</Text>
    ) : (
      <Text>You are in SAFE MODE. You cannot make changes.</Text>
    )}
  </BannerContainer>
);

Banner.propTypes = {
  inEditMode: PropTypes.bool.isRequired
};

export default Banner;

const BannerContainer = RowContainer.extend`
  background-color: ${props => (props.inEditMode ? 'var(--red)' : 'var(--green)')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-wrap: wrap;
  grid-column: 1 / -1;
  max-width: 100%;
  padding: 5px 0;
`;

const Text = styled.p`
  color: var(--main);
  font-size: 16px;
  margin: 8px 0;
`;
