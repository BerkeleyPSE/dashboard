import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

// local components
import TextInput from './TextInput';
import Button from './Button';
import { SectionHeader } from '../styleguide/Headers';
import { RowContainer } from '../styleguide/Containers';

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
    changes: {}
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

  createActive = async () => {
    const { changes } = this.state;
    const { data } = this.props;
    // find way to validate all fields
    const resStatus = await this.props.createActive({ ...data, ...changes });
    if (resStatus === 201) this.setState({ changes: {} });
  };

  updateActive = async () => {
    const { data } = this.props;
    const { changes } = this.state;
    const resStatus = await this.props.updateActive(data._id, { ...data, ...changes });
    if (resStatus === 200) this.setState({ changes: {} });
  };

  deleteActive = async () => {
    const { data } = this.props;
    const resStatus = await this.props.deleteActive(data._id);
    if (resStatus === 200) this.clearActive();
  };

  clearActive = async () => {
    this.props.clearActive();
    this.setState({ changes: {} });
  };

  render() {
    const { data, fields, isNew } = this.props;
    const { changes } = this.state;
    return (
      <EditorContainer>
        <SectionHeader>Edit</SectionHeader>
        {fields.map(field => {
          return (
            <TextInput
              dataId={data._id}
              key={field.key}
              dataKey={field.key}
              label={field.label}
              value={data[field.key] || field.default}
              onInputSave={this.onInputSave}
            />
          );
        })}
        {!isEmpty(changes) && (
          <RowContainer justifyContent="space-between">
            {isNew ? (
              <Button colorStyle="save" size="large" onClick={this.createActive} noMargin>
                Create New
              </Button>
            ) : (
              <Button colorStyle="save" size="large" onClick={this.updateActive} noMargin>
                Confirm Updates
              </Button>
            )}
            <Button colorStyle="reject" size="small" onClick={this.clearActive} noMargin>
              Reject Changes
            </Button>
            <Button colorStyle="reject" size="small" onClick={this.deleteActive} noMargin>
              Delete This
            </Button>
          </RowContainer>
        )}
      </EditorContainer>
    );
  }
}

const EditorContainer = styled.div`
  padding: 0 20px;
`;

/* write a parser function that parses the data and switches based on the typeof (data[field.key])
   -- if string --> return data[field.key]
   -- if array --> return data[field.key].join(' & ')
   -- if object --> return Object.entries(data[field.key]) (with the label as the key, input value as the value)
*/
