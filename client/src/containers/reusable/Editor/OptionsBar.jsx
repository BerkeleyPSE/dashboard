import React from 'react';

// node modules
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

// local components
import { RowContainer } from '../../styleguide/Containers';
import Button from '../Buttons/Button';

const OptionsBar = (props) => {
  const { changes, isNew, openModal } = props;

  return !isEmpty(changes) ? (
    <Container justifyContent="space-between">
      {isNew ? (
        <Button colorStyle="save" size="large" onClick={() => openModal('create')} noMargin>
          Create New
        </Button>
      ) : (
        <Button colorStyle="save" size="large" onClick={() => openModal('update')} noMargin>
          Confirm Updates
        </Button>
      )}
      <Button colorStyle="reject" size="medium" onClick={() => openModal('clear')} noMargin>
        Reject Changes
      </Button>
      <Button colorStyle="reject" size="small" onClick={() => openModal('delete')} noMargin>
        Delete This
      </Button>
    </Container>
  ) : (
    <Container justifyContent="flex-end">
      {isNew ? (
        <Button colorStyle="reject" size="small" onClick={() => openModal('clear')} noMargin>
          Cancel
        </Button>
      ) : (
        <Button colorStyle="reject" size="small" onClick={() => openModal('delete')} noMargin>
          Delete This
        </Button>
      )}
    </Container>
  );
};

OptionsBar.propTypes = {
  changes: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired
};

export default OptionsBar;

const Container = RowContainer.extend`
  margin: 20px 0;
`;
