import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

// local components
import InputController from './InputController';
import { ColumnContainer } from '../../styleguide/Containers';

export default class LongTextInput extends Component {
  static propTypes = {
    dataId: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    default: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onInputSave: PropTypes.func.isRequired,
    onInputDisableChange: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  static defaultProps = {
    dataId: ''
  };

  state = {
    errorMsg: '',
    value: this.props.value,
    disabled: true
  };

  componentWillReceiveProps = nextProps => {
    let { dataId } = this.props;
    if (dataId !== nextProps.dataId) {
      this.setState({ value: nextProps.value, disabled: true, errorMsg: '' });
    }
  };

  setDisabled = async bool => {
    const { onInputDisableChange, label } = this.props;
    await this.setState({ disabled: bool });
    onInputDisableChange(label, bool);
    if (!bool) this.textInput.focus();
  };

  onReset = () => {
    const { value, onInputDisableChange, label } = this.props;
    this.setState({
      value,
      disabled: true
    });
    onInputDisableChange(label, true);
  };

  onSave = () => {
    const { onInputSave, dataKey, validate } = this.props;
    const { value } = this.state;
    const errorMsg = validate(value);
    if (!isEmpty(errorMsg)) {
      this.setState({ errorMsg });
    } else {
      onInputSave(dataKey, value);
      this.setDisabled(true);
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onSave();
    }
  };

  render() {
    const { label } = this.props;
    let { value, disabled, errorMsg } = this.state;

    return (
      <InputContainer>
        <ColumnContainer alignItems="flex-start" justifyContent="space-between">
          <Label for={label}>{label}</Label>
          <ErrorLabel>{errorMsg && errorMsg}</ErrorLabel>
        </ColumnContainer>
        <Input
          id={label}
          value={value}
          disabled={this.props.disabled || disabled}
          innerRef={input => (this.textInput = input)}
          onChange={e => this.setState({ value: e.target.value })}
          hasChanged={!isEqual(this.props.value, value)}
          onKeyPress={this.handleKeyPress}
          type="textarea"
        />
        {!this.props.disabled && (
          <InputController
            disabled={disabled}
            setDisabled={this.setDisabled}
            onSave={this.onSave}
            onReset={this.onReset}
          />
        )}
      </InputContainer>
    );
  }
}

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 200px) auto 150px;
  align-items: center;
  margin: 20px 0;
  height: 200px;
`;

const Label = styled.label`
  min-width: 200px;
`;

const ErrorLabel = styled.p`
  color: var(--red);
  font-size: 0.875rem;
  margin: 5px 0;
  padding: 0;
  text-transform: uppercase;
`;

const Input = styled.textarea`
  background-color: ${props => !props.disabled && 'var(--white)'};
  background-color: ${props => props.hasChanged && 'var(--accent-alt)'};
  border: none;
  border-bottom: ${props => (props.disabled ? 'none' : `2px solid var(--purple)`)};
  padding: 5px 3px;
  outline: none;
  resize: vertical;
  min-height: 100%;
  min-width: 400px;
`;
