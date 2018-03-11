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
    deleteActive: PropTypes.func,
    unsavedFields: PropTypes.arrayOf(PropTypes.string),
    setUnsavedFields: PropTypes.func
  };

  static defaultProps = {
    data: {}
  };

  state = {
    changes: {},
    errorMsg: '',
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

  // when an input becomes disabled (isDisabled is true), remove the label from the unsaved fields
  onInputDisableChange = (label, isDisabled) => {
    let { unsavedFields, setUnsavedFields } = this.props;
    if (isDisabled) {
      const labelIndex = unsavedFields.indexOf(label);
      if (labelIndex >= 0) {
        unsavedFields = [
          ...unsavedFields.slice(0, labelIndex),
          ...unsavedFields.slice(labelIndex + 1)
        ];
      }
    } else {
      unsavedFields.push(label);
    }
    setUnsavedFields(unsavedFields);
  };

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
      this.setState({ changes: {}, errorMsg: '' });
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
    this.setState({ changes: {}, errorMsg: '' });
    this.closeModal();
  };

  openModal = type => {
    const { unsavedFields } = this.props;
    if (isEmpty(unsavedFields)) {
      this.setState({
        isModalOpen: true,
        modalType: type,
        errorMsg: ''
      });
    } else {
      this.setState({
        errorMsg: `Fields: "${unsavedFields.join(' ')}" must be saved or reset before continuing.`
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
    const { changes, isModalOpen, modalType, errorMsg } = this.state;
    return (
      <EditorContainer>
        <SectionHeader>Edit</SectionHeader>
        <InputCreator
          schema={fields}
          dataId={data._id || '-1'}
          data={data}
          onInputSave={this.onInputSave}
          onInputDisableChange={this.onInputDisableChange}
        />
        <ErrorLabel>{errorMsg && errorMsg}</ErrorLabel>
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

const ErrorLabel = styled.p`
  color: var(--red);
  font-size: 1.125rem;
  margin: 20px 0;
  padding: 0;
  text-transform: uppercase;
`;
