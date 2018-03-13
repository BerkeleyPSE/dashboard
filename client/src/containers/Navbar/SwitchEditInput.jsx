import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import '../../stylesheets/input-toggle.css';

// local components
import { RowContainer } from '../styleguide/Containers';

class SwitchEditInput extends Component {
  static propTypes = {
    editMode: PropTypes.bool.isRequired,
    setUserEditMode: PropTypes.func.isRequired
  };

  changeInput = e => {
    const { setUserEditMode } = this.props;
    setUserEditMode(e.target.checked);
  };

  render() {
    const { editMode } = this.props;
    return (
      <InputContainer justifyContent="space-between">
        <SafeSpan>Safe Mode</SafeSpan>
        <Toggle
          id="edit-input"
          className="customized-toggle"
          defaultChecked={editMode}
          onChange={this.changeInput}
        />
        <EditSpan>Edit Mode</EditSpan>
      </InputContainer>
    );
  }
}

export default SwitchEditInput;

const InputContainer = RowContainer.extend`
  margin: 5px;
  width: 100%;
`;

const SafeSpan = styled.span`
  color: var(--green);
  font-size: 12px;
  text-transform: uppercase;
`;

const EditSpan = styled.span`
  color: var(--red);
  font-size: 12px;
  text-transform: uppercase;
`;
