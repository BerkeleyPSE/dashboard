import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// local components
import { RowContainer } from '../../styleguide/Containers';
import InputController from './InputController';

export default class SingleDropdown extends Component {
  static propTypes = {
    dataId: PropTypes.string,
    dataKey: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.object),
    handleSubmit: PropTypes.func, // send the value to the collector
    selectedOption: PropTypes.object,
    defaultOption: PropTypes.object,
    onInputSave: PropTypes.func,
  };

  static defaultProps = {
    dataKey: {label: '', key: ''},
    options: [],
    defaultOption: { label: '', value: '' }
  };

  state = {
    disabled: true,
    isOpen: false,
    prevOption: this.props.selectedOption || this.props.defaultOption,
    selectedOption: this.props.selectedOption || this.props.defaultOption
  };

  onSave = () => {
    const { onInputSave, dataKey } = this.props;
    const { selectedOption };
    onInputSave(dataKey.key, selectedOption.value);
    this.setState({
      prevOption: selectedOption,
      disabled: true
    });
  }

  onReset = () => {
    const { prevOption } = this.state;
    this.setState({ selectedOption: prevOption, disabled: true });
  }

  render() {
    const { options, handleSubmit, dataKey, selectedOption, defaultOption } = this.props;
    const { isOpen, disabled } = this.state;

    const OPTIONS = options.unshift(defaultOption);

    return (
      <RowContainer>
        <Dropdown
          name={`${dataKey.key}-dropdown`}
          value={selectedOption.value}
          onChange={selectedOption => this.setState({ selectedOption })}
          placeholder={`Select a ${dataKey.label}`}
          resetValue={defaultOption}
          searchable={false}
          disabled={disabled}
        />
        <InputController
          disabled={disabled}
          setDisabled={(bool) => this.setState({ disabled: bool})}
          onSave={this.onSave}
          onReset={this.onReset}
        />
      </RowContainer>
    );
  }
}

const Dropdown = styled(Select)``;
