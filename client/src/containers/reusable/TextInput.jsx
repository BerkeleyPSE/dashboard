import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components

export default class TextInput extends Component {
  static propTypes = {
    dataId: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
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

  componentWillReceiveProps = nextProps => {
    let { dataId } = this.props;
    if (dataId !== nextProps.dataId) {
      this.setState({ value: nextProps.value, disabled: true });
    }
  };

  setDisabled = async bool => {
    const { label } = this.props;
    await this.setState({ disabled: bool });
    if (!bool) document.getElementById(label).focus();
  };

  resetInput = () => {
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
      <InputContainer justifyContent="baseline">
        <Label for={label}>{label}</Label>
        <Input
          id={label}
          value={value}
          disabled={disabled}
          ref={input => (this.textInput = input)}
          onChange={e => this.setState({ value: e.target.value })}
          hasChanged={this.props.value !== value}
        />
        {disabled ? (
          <div onClick={() => this.setDisabled(false)}>
            <i className="fas fa-pencil-alt" aria-hidden="true" />
          </div>
        ) : (
          <Button onClick={this.onSave}>Save</Button>
          // try to add a reset button here, but it throws an exception when wrapped with a div
        )}
      </InputContainer>
    );
  }
}

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 200px) auto 50px;
  margin: 20px 0;
`;

const Label = styled.label`
  margin: 0 5px;
  min-width: 150px;
`;

const Input = styled.input`
  background-color: ${props => !props.disabled && 'var(--white)'};
  border: none;
  border-bottom: ${props => (props.disabled ? 'none' : `2px solid var(--purple)`)};
  border: ${props => props.hasChanged && '1px solid red'};
  padding: 2px 3px;
  outline: none;
  min-width: 200px;
`;

const Button = styled.button`
  background-color: var(--white);
  border: 2px solid var(--accent);
  color: var(--accent);
  cursor: pointer;
  margin: 0 5px;
  padding: 3px 5px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.25s;

  &:hover {
    background-color: var(--accent);
    color: var(--white);
  }
`;
