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
    defaultOption: PropTypes.object,
    label: PropTypes.string,
    onInputSave: PropTypes.func, // send the value to the collector
    options: PropTypes.arrayOf(PropTypes.object),
    selectedOption: PropTypes.object,
    validate: PropTypes.func.isRequired
  };

  static defaultProps = {
    dataKey: { label: '', key: '' },
    options: [],
    defaultOption: { label: '', value: '' }
  };

  state = {
    disabled: true,
    isOpen: false,
    prevOption: this.props.selectedOption || this.props.defaultOption,
    selectedOption: this.props.selectedOption || this.props.defaultOption
  };

  componentWillReceiveProps = nextProps => {
    let { dataId } = this.props;
    if (dataId !== nextProps.dataId) {
      this.setState({
        prevOption: nextProps.selectedOption || nextProps.defaultOption,
        selectedOption: nextProps.selectedOption || nextProps.defaultOption,
        disabled: true
      });
    }
  };

  onSave = () => {
    const { onInputSave, dataKey } = this.props;
    const { selectedOption } = this.state;
    onInputSave(dataKey.key, selectedOption.value);
    this.setState({
      prevOption: selectedOption,
      disabled: true
    });
  };

  onChange = selectedOption => {
    const prevOption = this.state.selectedOption;
    this.setState({
      prevOption,
      selectedOption
    });
  };

  onReset = () => {
    const { prevOption } = this.state;
    this.setState({ selectedOption: prevOption, disabled: true });
  };

  render() {
    const { options, dataKey, defaultOption, label } = this.props;
    const { disabled, selectedOption } = this.state;

    return (
      <InputContainer>
        <Label for={label}>{label}</Label>
        <Dropdown
          id={label}
          name={`${dataKey.key}-dropdown`}
          value={selectedOption.value}
          options={options}
          onChange={this.onChange}
          placeholder={`Select a ${dataKey.label}`}
          resetValue={defaultOption}
          searchable={false}
          disabled={disabled}
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
  min-width: 150px;
`;

const Dropdown = styled(Select)`
  min-width: 275px;
`;
