import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// local components
import { ColumnContainer } from '../../styleguide/Containers';
import InputController from './InputController';

export default class SingleDropdown extends Component {
  static propTypes = {
    dataId: PropTypes.string,
    dataKey: PropTypes.string,
    defaultOption: PropTypes.object,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onInputSave: PropTypes.func, // send the value to the collector
    onInputDisableChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    selectedOption: PropTypes.object,
    validate: PropTypes.func.isRequired
  };

  static defaultProps = {
    dataKey: '',
    options: [],
    defaultOption: { label: '', value: '' }
  };

  state = {
    disabled: true,
    errorMsg: '',
    selectedOption: this.props.selectedOption || this.props.defaultOption
  };

  componentWillReceiveProps = nextProps => {
    let { dataId } = this.props;
    if (dataId !== nextProps.dataId) {
      this.setState({
        selectedOption: nextProps.selectedOption || nextProps.defaultOption,
        disabled: true,
        errorMsg: ''
      });
    }
  };

  onSave = () => {
    const { selectedOption } = this.state;
    const { onInputSave, dataKey, validate, onInputDisableChange, label } = this.props;
    const errorMsg = validate(selectedOption);
    if (!isEmpty(errorMsg)) {
      this.setState({ errorMsg });
    } else {
      onInputSave(dataKey, selectedOption);
      this.setState({
        disabled: true,
        errorMsg: ''
      });
      onInputDisableChange(label, true);
    }
  };

  onChange = selectedOption => {
    this.setState({
      selectedOption,
      errorMsg: ''
    });
  };

  onReset = () => {
    const { selectedOption, onInputDisableChange, label } = this.props;
    this.setState({ selectedOption, disabled: true, errorMsg: '' });
    onInputDisableChange(label, true);
  };

  setDisabled = bool => {
    const { onInputDisableChange, label } = this.props;
    this.setState({ disabled: bool });
    onInputDisableChange(label, bool);
  };

  render() {
    const { options, dataKey, defaultOption, label } = this.props;
    const { disabled, selectedOption, errorMsg } = this.state;

    return (
      <InputContainer>
        <ColumnContainer alignItems="flex-start" justifyContent="space-between">
          <Label for={label}>{label}</Label>
          {errorMsg && <ErrorLabel>{errorMsg}</ErrorLabel>}
        </ColumnContainer>
        <Dropdown
          id={label}
          name={`${dataKey}-dropdown`}
          value={selectedOption.value}
          options={options}
          onChange={this.onChange}
          placeholder={`Select a ${label}`}
          resetValue={selectedOption || defaultOption}
          searchable={false}
          disabled={this.props.disabled || disabled}
          hasChanged={!isEqual(selectedOption.value, this.props.selectedOption.value)}
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

const Dropdown = styled(Select)`
  min-width: 275px;

  & .Select-value {
    background-color: ${props => (props.hasChanged ? 'var(--accent-alt)' : 'rgba(0, 0, 0, 0)')};
  }
`;
