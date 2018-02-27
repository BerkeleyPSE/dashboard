import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { RowContainer } from '../styleguide/Containers';

export default class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      disabled: true
    };
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    });
  }

  toggleDisabled = bool => {
    const { label } = this.props;
    this.setState({ disabled: bool });
    if (bool) document.getElementById(label).focus();
  };

  render() {
    const { label } = this.props;
    let { value, disabled } = this.state;

    return (
      <InputContainer alignItems="flex-start" justifyContent="baseline">
        <Label for={label}>{label}</Label>
        <Input
          id={label}
          value={value}
          disabled={disabled}
          ref={input => (this.textInput = input)}
          onChange={e => this.setState({ value: e.target.value })}
        />
        {disabled ? (
          <div onClick={() => this.toggleDisabled(false)}>
            <i className="fas fa-pencil-alt" aria-hidden="true" />
          </div>
        ) : (
          <button onClick={() => this.toggleDisabled(true)}>Save</button>
        )}
      </InputContainer>
    );
  }
}

const InputContainer = RowContainer.extend`
  margin: 10px 0;
`;

const Label = styled.label`
  margin: 0 5px;
`;

const Input = styled.input`
  border: none;
  border-bottom: ${props => (props.disabled ? 'none' : `2px solid var(--purple)`)};
  padding: 2px 3px;
  outline: none;
  min-width: 200px;
`;
