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

export default class MultipleDropdown extends Component {
  static propTypes = {
    dataId: PropTypes.string,
    dataKey: PropTypes.string,
    defaultOption: PropTypes.array,
    label: PropTypes.string,
    onInputSave: PropTypes.func, // send the value to the collector
    options: PropTypes.arrayOf(PropTypes.object),
    selectedOptions: PropTypes.arrayOf(PropTypes.object),
    validate: PropTypes.func.isRequired
  };

  static defaultProps = {
    dataKey: '',
    options: [],
    defaultOption: []
  };

  state = {
    disabled: true,
    errorMsg: '',
    selectedOptions: this.props.selectedOptions || this.props.defaultOption
  };

  componentWillReceiveProps = nextProps => {
    let { dataId } = this.props;
    if (dataId !== nextProps.dataId) {
      this.setState({
        selectedOptions: nextProps.selectedOptions || nextProps.defaultOption,
        disabled: true
      });
    }
  };

  onSave = () => {
    const { selectedOptions } = this.state;
    const { onInputSave, dataKey, validate } = this.props;
    const errorMsg = validate(selectedOptions);
    if (!isEmpty(errorMsg)) {
      this.setState({ errorMsg });
    } else {
      onInputSave(dataKey, selectedOptions);
      this.setState({
        disabled: true,
        errorMsg: ''
      });
    }
  };

  onChange = selectedOptions => {
    this.setState({
      selectedOptions,
      errorMsg: ''
    });
  };

  onReset = () => {
    const { selectedOptions } = this.props;
    this.setState({ selectedOptions, disabled: true, errorMsg: '' });
  };

  render() {
    const { options, dataKey, defaultOption, label } = this.props;
    const { disabled, selectedOptions, errorMsg } = this.state;

    console.log('---');
    console.log(this.props.selectedOptions);
    console.log(selectedOptions);

    return (
      <InputContainer>
        <ColumnContainer alignItems="flex-start" justifyContent="space-between">
          <Label for={label}>{label}</Label>
          <ErrorLabel>{errorMsg && errorMsg}</ErrorLabel>
        </ColumnContainer>
        <Dropdown
          id={label}
          disabled={disabled}
          hasChanged={!isEqual(selectedOptions, this.props.selectedOptions)}
          multi={true}
          name={`${dataKey}-dropdown`}
          onChange={this.onChange}
          options={options}
          placeholder={`Select a ${label}`}
          resetValue={selectedOptions || defaultOption}
          searchable={false}
          value={selectedOptions}
        />
        <InputController
          disabled={disabled}
          setDisabled={bool => this.setState({ disabled: bool })}
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
  width: 275px;

  & .Select-control {
    background-color: ${props => (props.hasChanged ? 'var(--accent-alt)' : 'rgba(0, 0, 0, 0)')};
  }
`;
