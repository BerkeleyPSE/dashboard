import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import InputCreator from '../Inputs/InputCreator';
import OptionsBar from './OptionsBar';
import ConfirmationModal from './ConfirmationModal';
import { SectionHeader } from '../../styleguide/Headers';

export default class Viewer extends Component {
  static propTypes = {
    data: PropTypes.object,
    disabled: PropTypes.bool,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    clearActive: PropTypes.func,
    deleteActive: PropTypes.func,
    deleteAll: PropTypes.func
  };

  static defaultProps = {
    data: {}
  };

  state = {
    isModalOpen: false,
    modalType: ''
  };

  deleteActive = async () => {
    const { data } = this.props;
    const resStatus = await this.props.deleteActive(data._id);
    if (resStatus === 200) this.clearActive();
  };

  deleteAll = async () => {
    const resStatus = await this.props.deleteAll();
    if (resStatus === 200) this.clearActive();
  };

  clearActive = () => {
    this.props.clearActive();
    this.closeModal();
  };

  openModal = modalType => {
    this.setState({ isModalOpen: true, modalType });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { data, disabled, fields } = this.props;
    const { isModalOpen, modalType } = this.state;

    return (
      <ViewerContainer>
        <SectionHeader>View</SectionHeader>
        <InputCreator schema={fields} dataId={data._id || '-1'} data={data} disabled={true} />
        {!disabled && <OptionsBar openModal={this.openModal} isEditView={false} />}
        <ConfirmationModal
          isOpen={isModalOpen}
          closeModal={this.closeModal}
          modalType={modalType}
          deleteActive={this.deleteActive}
          deleteAll={this.deleteAll}
          clearActive={this.clearActive}
        />
      </ViewerContainer>
    );
  }
}

const ViewerContainer = styled.div`
  padding: 0 20px;
  position: relative;
`;
