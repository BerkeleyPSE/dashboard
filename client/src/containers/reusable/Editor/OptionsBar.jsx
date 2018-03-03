import React from 'react';

// node modules
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

// local components
import { RowContainer } from '../../styleguide/Containers';
import Button from '../Buttons/Button';

const OptionsBar = (props) => {
  const {
    changes, isNew, createActive, updateActive, deleteActive, clearActive
  } = props;

  return !isEmpty(changes) ? (
    <RowContainer justifyContent="space-between">
      {isNew ? (
        <Button colorStyle="save" size="large" onClick={createActive} noMargin>
          Create New
        </Button>
      ) : (
        <Button colorStyle="save" size="large" onClick={updateActive} noMargin>
          Confirm Updates
        </Button>
      )}
      <Button colorStyle="reject" size="medium" onClick={clearActive} noMargin>
        Reject Changes
      </Button>
      <Button colorStyle="reject" size="small" onClick={deleteActive} noMargin>
        Delete This
      </Button>
    </RowContainer>
  ) : (
    <RowContainer justifyContent="flex-end">
      {isNew ? (
        <Button colorStyle="reject" size="small" onClick={clearActive} noMargin>
          Cancel
        </Button>
      ) : (
        <Button colorStyle="reject" size="small" onClick={deleteActive} noMargin>
          Delete This
        </Button>
      )}
    </RowContainer>
  );
};

OptionsBar.propTypes = {
  changes: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  createActive: PropTypes.func.isRequired,
  updateActive: PropTypes.func.isRequired,
  deleteActive: PropTypes.func.isRequired,
  clearActive: PropTypes.func.isRequired
};

export default OptionsBar;
