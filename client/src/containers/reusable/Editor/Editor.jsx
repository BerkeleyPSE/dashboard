import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

// local components
import InputCreator from '../Inputs/InputCreator';
import OptionsBar from './OptionsBar';
import ConfirmationModal from './ConfirmationModal';
import { SectionHeader } from '../../styleguide/Headers';

export default class Editor extends Component {
  static propTypes = {
    data: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    clearActive: PropTypes.func,
    isNew: PropTypes.bool,
    createActive: PropTypes.func,
    updateActive: PropTypes.func,
    deleteActive: PropTypes.func
  };

  static defaultProps = {
    data: {}
  };

  state = {
    changes: {},
    errorMsg: '',
    unsavedFields: [],
    isModalOpen: false,
    modalType: ''
  };

  onInputSave = (fieldKey, newValue) => {
    const { data } = this.props;
    let newChanges = { ...this.state.changes };
    if (data[fieldKey] === newValue) {
      if (newChanges[fieldKey]) {
        delete newChanges[fieldKey];
      }
    } else {
      newChanges[fieldKey] = newValue;
    }

    this.setState({ changes: newChanges });
  };

  // onInputDisableChange = label => {
  //   const unsavedFields = [...this.state.unsavedFields];
  //   unsavedFields.push(label);
  //   this.setState({ })
  // };

  createActive = async () => {
    const { changes } = this.state;
    const { data } = this.props;
    // find way to validate all fields
    const resStatus = await this.props.createActive({ ...data, ...changes });
    if (resStatus === 201) {
      this.setState({ changes: {} });
      this.closeModal();
    }
  };

  updateActive = async () => {
    const { data } = this.props;
    const { changes } = this.state;
    const resStatus = await this.props.updateActive(data._id, { ...data, ...changes });
    if (resStatus === 200) {
      this.setState({ changes: {} });
      this.closeModal();
    }
  };

  deleteActive = async () => {
    const { data } = this.props;
    const resStatus = await this.props.deleteActive(data._id);
    if (resStatus === 200) this.clearActive();
  };

  clearActive = async () => {
    this.props.clearActive();
    this.setState({ changes: {} });
    this.closeModal();
  };

  openModal = type => {
    const { unsavedFields } = this.state;
    if (isEmpty(unsavedFields)) {
      this.setState({
        isModalOpen: true,
        modalType: type
      });
    } else {
      this.setState({
        errorMsg: `${unsavedFields.join(' ')} fields must be saved or reset before continuing.`
      });
    }
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalType: ''
    });
  };

  render() {
    const { data, fields, isNew } = this.props;
    const { changes, isModalOpen, modalType } = this.state;
    return (
      <EditorContainer>
        <SectionHeader>Edit</SectionHeader>
        <InputCreator
          schema={fields}
          dataId={data._id || '-1'}
          data={data}
          onInputSave={this.onInputSave}
        />
        <OptionsBar changes={changes} isNew={isNew} openModal={this.openModal} />
        <ConfirmationModal
          isOpen={isModalOpen}
          closeModal={this.closeModal}
          modalType={modalType}
          createActive={this.createActive}
          updateActive={this.updateActive}
          deleteActive={this.deleteActive}
          clearActive={this.clearActive}
        />
      </EditorContainer>
    );
  }
}

const EditorContainer = styled.div`
  padding: 0 20px;
  position: relative;
`;
