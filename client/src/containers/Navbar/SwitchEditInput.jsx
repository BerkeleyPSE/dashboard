import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwitchEditInput = props => (
  <InputContainer>
    <Label for="edit-input">
      Mode
      <input type="checkbox" />
      <Slider />
    </Label>
  </InputContainer>
);

SwitchEditInput.propTypes = {};

export default SwitchEditInput;

const InputContainer = styled.div``;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
