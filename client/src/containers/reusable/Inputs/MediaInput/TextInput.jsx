import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local
import { RowContainer } from '../../../styleguide/Containers';

const TextInput = (props) => {
  const {
    fieldKey, label, value, disabled, onChange, hasChanged
  } = props;
  return (
    <Container>
      <Label for={fieldKey}>{label}</Label>
      <Input
        id={fieldKey}
        disabled={disabled}
        onChange={e => onChange(fieldKey, e.target.value)}
        value={value}
        hasChanged={hasChanged}
        type="text"
      />
    </Container>
  );
};

export default TextInput;

TextInput.propTypes = {
  fieldKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasChanged: PropTypes.bool,
  disabled: PropTypes.bool
};

TextInput.defaultProps = {
  disabled: true,
  hasChanged: false
};

const Container = RowContainer.extend`
  margin: 5px 0;
`;

const Label = styled.label`
  min-width: 75px;
`;

const Input = styled.input`
  background-color: ${props => !props.disabled && 'var(--white)'};
  background-color: ${props => props.hasChanged && 'var(--accent-alt)'};
  border: none;
  border-bottom: ${props => (props.disabled ? 'none' : '2px solid var(--purple)')};
  padding: 5px 3px;
  outline: none;
  min-width: 275px;
  height: 100%;
`;
