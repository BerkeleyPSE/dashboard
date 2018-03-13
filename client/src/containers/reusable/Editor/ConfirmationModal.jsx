import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

// local components
import { RowContainer } from '../../styleguide/Containers';
import { SectionHeader } from '../../styleguide/Headers';
import Button from '../Buttons/Button';

// constants
const MESSAGE_MAP = {
  create: 'This new item will be LIVE.',
  update: 'You will not be able to revert these updates.',
  delete: 'You will not be able to restore this item.',
  deleteAll: 'You will not be able to restore these items.',
  clear: 'Any changes you have made on this item will not be saved.'
};

const ConfirmationModal = (props) => {
  const {
    isOpen,
    closeModal,
    modalType,
    createActive,
    deleteActive,
    deleteAll,
    updateActive,
    clearActive
  } = props;

  const GoBackButton = (
    <Button onClick={closeModal} size="medium" colorStyle="reject">
      Go Back
    </Button>
  );

  const actionButton = () => {
    switch (modalType) {
      case 'create':
        return (
          <Button onClick={createActive} size="medium" colorStyle="save">
            Confirm Creation
          </Button>
        );
      case 'update':
        return (
          <Button onClick={updateActive} size="medium" colorStyle="save">
            Confirm Update
          </Button>
        );
      case 'delete':
        return (
          <Button onClick={deleteActive} size="medium" colorStyle="save">
            Confirm Deletion
          </Button>
        );
      case 'deleteAll':
        return (
          <Button onClick={deleteAll} size="medium" colorStyle="save">
            Confirm Total Deletion
          </Button>
        );
      case 'clear':
        return (
          <Button onClick={clearActive} size="medium" colorStyle="save">
            Confirm Cancellation
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <CModal isOpen={isOpen} onRequestClose={props.closeModal}>
      <SectionHeader>Are you sure?</SectionHeader>
      <Text>{MESSAGE_MAP[modalType]}</Text>
      <br />
      <RowContainer>
        {actionButton()}
        {GoBackButton}
      </RowContainer>
    </CModal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  createActive: PropTypes.func,
  clearActive: PropTypes.func,
  updateActive: PropTypes.func,
  deleteActive: PropTypes.func,
  deleteAll: PropTypes.func
};

ConfirmationModal.defaultProps = {
  createActive: () => null,
  clearActive: () => null,
  updateActive: () => null,
  deleteActive: () => null,
  deleteAll: () => null
};

export default ConfirmationModal;

const CModal = styled(Modal)`
  height: 300px;
  width: 500px;

  background-color: var(--white);
  border: 5px solid var(--accent-alt);
  outline: none;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-item: center;
  justifycontent: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.p`
  color: var(--accent);
  font-size: 1.25rem;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;
