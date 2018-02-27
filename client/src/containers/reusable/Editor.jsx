import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import TextInput from './TextInput';
import { SectionHeader } from '../styleguide/Headers';

export default class Editor extends Component {
  static propTypes = {
    data: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {
    data: {}
  };

  constructor(props) {
    super(props);
    this.changed = {};
  }

  onInputSave = (fieldKey, newValue) => {
    const { data } = this.props;

    if (data[fieldKey] === newValue) {
      if (this.changed[fieldKey]) delete this.changed[fieldKey];
    } else {
      this.changed[fieldKey] = newValue;
    }

    // console.log(this.changed);
  };

  render() {
    let { data, fields } = this.props;
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
