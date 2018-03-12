import React from 'react';

// node modules
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

// local components
import { RowContainer } from '../../styleguide/Containers';
import Button from '../Buttons/Button';

const BUTTON_TYPES = {
  create: {
    colorStyle: 'save',
    size: 'large',
    children: 'Create New'
  },
  update: {
    colorStyle: 'save',
    size: 'large',
    children: 'Confirm Updates'
  },
  clear: {
    colorStyle: 'reject',
    size: 'medium',
    children: 'Reject Changes'
  },
  delete: {
    colorStyle: 'reject',
    size: 'small',
    children: 'Delete This'
  },
  deleteAll: {
    colorStyle: 'reject',
    size: 'small',
    children: 'Delete All'
  }
};

const OptionsBar = (props) => {
  const {
    changes, isNew, openModal, isEditView
  } = props;

  const buttons = [];
  if (!isEmpty(changes)) {
    if (isNew) buttons.push('create');
    else buttons.push('update');
    buttons.push('clear', 'delete');
  } else if (isNew) buttons.push('clear');
  else {
    buttons.push('delete');
    if (!isEditView) buttons.push('deleteAll');
  }

  return (
    <Container justifyContent="space-between">
      {buttons.map(button => (
        <Button {...BUTTON_TYPES[button]} onClick={() => openModal(button)} noMargin />
      ))}
    </Container>
  );
};

OptionsBar.propTypes = {
  changes: PropTypes.object,
  isNew: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  isEditView: PropTypes.bool.isRequired
};

OptionsBar.defaultProps = {
  changes: {},
  isNew: false
};

export default OptionsBar;

const Container = RowContainer.extend`
  margin: 20px 0;
`;
