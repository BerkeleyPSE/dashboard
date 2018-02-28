import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

// local components
import { RowContainer } from '../styleguide/Containers';
import Button from './Button';

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
    await this.setState({ disabled: bool });
    if (!bool) this.textInput.focus();
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
        {disabled ? (
          <IconContainer onClick={() => this.setDisabled(false)}>
            <i className="fas fa-pencil-alt" aria-hidden="true" />
          </IconContainer>
        ) : (
          <RowContainer>
            <Button colorStyle="save" size="small" onClick={this.onSave}>
              Save
            </Button>
            <Button colorStyle="reject" size="small" onClick={this.resetInput}>
              Reset
            </Button>
          </RowContainer>
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

const IconContainer = RowContainer.extend`
  color: var(--accent);
  cursor: pointer;

  &:hover {
    color: var(--accent-alt);
  }
`;
