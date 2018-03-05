import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

// local components
import { RowContainer } from '../../styleguide/Containers';
import { SectionHeader } from '../../styleguide/Headers';
import Button from '../Buttons/Button';

const ConfirmationModal = (props) => {
  const {
    isOpen,
    closeModal,
    modalType,
    createActive,
    deleteActive,
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
      case 'clear':
        return (
          <Button onClick={clearActive} size="medium" colorStyle="save">
            Confirm Reset
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <CModal isOpen={isOpen} onRequestClose={props.closeModal}>
      <SectionHeader>Are you sure?</SectionHeader>
      <Text>You will not be able to revert these changes.</Text>
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
  createActive: PropTypes.func.isRequired,
  clearActive: PropTypes.func.isRequired,
  updateActive: PropTypes.func.isRequired,
  deleteActive: PropTypes.func.isRequired
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
