import React from 'react';

// node modles
import PropTypes from 'prop-types';

// local components
import { RowContainer } from '../../styleguide/Containers';
import Button from '../Buttons/Button';

const InputController = (props) => {
  const {
    disabled, setDisabled, onSave, onReset
  } = props;
  return disabled ? (
    <IconContainer onClick={() => setDisabled(false)}>
      <i className="fas fa-pencil-alt" aria-hidden="true" />
    </IconContainer>
  ) : (
    <RowContainer>
      <Button colorStyle="save" size="small" onClick={onSave}>
        Save
      </Button>
      <Button colorStyle="reject" size="small" onClick={onReset}>
        Reset
      </Button>
    </RowContainer>
  );
};

InputController.propTypes = {
  disabled: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default InputController;

const IconContainer = RowContainer.extend`
  color: var(--accent);
  cursor: pointer;

  &:hover {
    color: var(--accent-alt);
  }
`;
