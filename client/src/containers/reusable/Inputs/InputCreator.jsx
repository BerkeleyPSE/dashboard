import React from 'react';

// node modules
import PropTypes from 'prop-types';

// local components
import { ColumnContainer } from '../../styleguide/Containers';
import TextInput from '../Inputs/TextInput';
import SingleDropdown from '../Inputs/SingleDropdown';

const InputCreator = (props) => {
  const createInputs = () => {
    const {
      schema, dataId, onInputSave, data
    } = props;

    console.log(data);

    schema.map((field) => {
      switch (field.type) {
        case 'shortText':
          return (
            <TextInput
              key={field.key}
              dataId={dataId}
              label={field.label}
              dataKey={field.key}
              default={field.input.default}
              validate={field.input.validate}
              onInputSave={onInputSave}
              value={data[field.key] || field.input.default}
            />
          );
        case 'singleDropdown':
          return (
            <SingleDropdown
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              options={field.input.options}
              defaultOption={field.input.default}
              selectedOption={data[field.key] || field.input.default}
              validate={field.input.validate}
              onInputSave={onInputSave}
            />
          );
        default:
          return 'input type not specified';
      }
    });
  };

  return <ColumnContainer>{createInputs()}</ColumnContainer>;
};

InputCreator.propTypes = {
  schema: PropTypes.array.isRequired,
  dataId: PropTypes.string.isRequired,
  onInputSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default InputCreator;
