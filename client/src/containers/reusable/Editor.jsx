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
    clearActive: PropTypes.func
  };

  static defaultProps = {
    data: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      changes: {}
    };
  }

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

  render() {
    const { data, fields, clearActive, updateActive } = this.props;
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
            <Button
              colorStyle="save"
              size="large"
              onClick={() => updateActive(data._id, { ...data, ...changes })}
              noMargin
            >
              Confirm Updates
            </Button>
            <Button colorStyle="reject" size="small" onClick={clearActive} noMargin>
              Reject Changes
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
