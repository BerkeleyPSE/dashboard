import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import TextInput from './TextInput';

export default class Editor extends Component {
  static propTypes = {
    data: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {
    data: {}
  };

  render() {
    let { data, fields } = this.props;
    return (
      <EditorContainer>
        <h1>Editor Component</h1>
        {/* {JSON.stringify(data, null, 2)}
        {typeof data} */}
        {fields.map(field => {
          return (
            <TextInput
              key={field.key}
              label={field.label}
              value={data[field.key] || field.default}
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
