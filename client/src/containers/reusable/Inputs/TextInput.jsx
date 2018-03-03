import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

// local components
import InputController from './InputController';

export default class TextInput extends Component {
  static propTypes = {
    dataId: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    default: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onInputSave: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  static defaultProps = {
    dataId: ''
  };

  state = {
    value: this.props.value,
    disabled: true
  };

  componentWillReceiveProps = nextProps => {
    let { dataId } = this.props;
    if (dataId !== nextProps.dataId) {
      this.setState({ value: nextProps.value, disabled: true });
    }
  };

  setDisabled = async bool => {
    await this.setState({ disabled: bool });
    if (!bool) this.textInput.focus();
  };

  onReset = () => {
    const { value } = this.props;
    this.setState({
      value,
      disabled: true
    });
  };

  onSave = () => {
    const { onInputSave, dataKey } = this.props;
    const { value } = this.state;
    onInputSave(dataKey, value);
    this.setDisabled(true);
  };

  render() {
    const { label } = this.props;
    let { value, disabled } = this.state;

    return (
      <InputContainer>
        <Label for={label}>{label}</Label>
        <Input
          id={label}
          value={value}
          disabled={disabled}
          innerRef={input => (this.textInput = input)}
          onChange={e => this.setState({ value: e.target.value })}
          hasChanged={!isEqual(this.props.value, value)}
          type="text"
        />
        <InputController
          disabled={disabled}
          setDisabled={this.setDisabled}
          onSave={this.onSave}
          onReset={this.onReset}
        />
      </InputContainer>
    );
  }
}

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 200px) auto 150px;
  align-items: center;
  margin: 20px 0;
`;

const Label = styled.label`
  min-width: 150px;
`;

const Input = styled.input`
  background-color: ${props => !props.disabled && 'var(--white)'};
  background-color: ${props => props.hasChanged && 'var(--accent-alt)'};
  border: none;
  border-bottom: ${props => (props.disabled ? 'none' : `2px solid var(--purple)`)};
  padding: 5px 3px;
  outline: none;
  min-width: 200px;
  height: 100%;
`;
