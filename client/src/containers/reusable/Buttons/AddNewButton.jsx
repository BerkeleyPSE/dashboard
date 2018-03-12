import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddNewButton = props => (
  <Button onClick={props.onClick} disabled={props.disabled}>
    <Text>Add a New Brother</Text>
  </Button>
);

AddNewButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default AddNewButton;

const Button = styled.button`
  background-color: ${props => (!props.disabled ? 'var(--green)' : 'var(--red)')};
  border: ${props => (!props.disabled ? '2px solid var(--green)' : '2px solid var(--red)')};
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  margin: 3px 0 6px 0;
  padding: 3px 5px;
  outline: none;
  width: 100%;
  transition: all 0.25s;

  &:hover {
    background-color: ${props => !props.disabled && 'var(--white)'};
    color: ${props => !props.disabled && 'var(--green)'};
  }
`;

const Text = styled.p`
  margin: 2px 0;
  padding: 2px 0;
`;
