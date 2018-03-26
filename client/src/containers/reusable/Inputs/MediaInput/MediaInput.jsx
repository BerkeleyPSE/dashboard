import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

// local components
import InputController from '../InputController';
import { ColumnContainer } from '../../../styleguide/Containers';
import TextInput from './TextInput';
import MEDIA_TYPES from '../../../Brothers/media_types';

export default class MediaInput extends Component {
  static propTypes = {
    dataId: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onInputSave: PropTypes.func.isRequired,
    onInputDisableChange: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired
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
  };

  onChange = (fieldKey, value) => {
    const values = { ...this.state.value };
    values[fieldKey].value = value;
    this.setState({ value: values });
  };

  onReset = () => {
    const { value, onInputDisableChange, label } = this.props;
    this.setState({
      value,
      disabled: true,
      errorMsg: ''
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

  render() {
    const { label } = this.props;
    let { value, disabled, errorMsg } = this.state;

    return (
      <InputContainer>
        <ColumnContainer alignItems="flex-start" justifyContent="space-between">
          <Label for={label}>{label}</Label>
          {errorMsg && <ErrorLabel>{errorMsg}</ErrorLabel>}
        </ColumnContainer>
        <ColumnContainer alignItems="flex-start" justifyContent="space-between">
          {Object.keys(MEDIA_TYPES).map(fieldKey => {
            return (
              <TextInput
                key={fieldKey}
                fieldKey={fieldKey}
                label={MEDIA_TYPES[fieldKey].label}
                value={value[fieldKey].value}
                disabled={disabled}
                onChange={this.onChange}
                hasChanged={!isEqual(this.props.value[fieldKey].value, value[fieldKey].value)}
              />
            );
          })}
        </ColumnContainer>
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
  align-items: flex-start;
  margin: 20px 0;
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
