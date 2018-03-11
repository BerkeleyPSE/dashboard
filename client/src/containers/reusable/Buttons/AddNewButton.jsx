import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddNewButton = props => (
  <Button onClick={props.onClick}>
    <Text>Add a New Brother</Text>
  </Button>
);

AddNewButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddNewButton;

const Button = styled.button`
  background-color: var(--green);
  border: 2px solid var(--green);
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  margin: 3px 0 6px 0;
  padding: 3px 5px;
  outline: none;
  width: 100%;
  transition: all 0.25s;

  &:hover {
    background-color: var(--white);
    color: var(--green);
  }
`;

const Text = styled.p`
  margin: 2px 0;
  padding: 2px 0;
`;
