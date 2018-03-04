import React from 'react';

// node modules
import PropTypes from 'prop-types';

// local components
import { ColumnContainer } from '../../styleguide/Containers';
import TextInput from '../Inputs/TextInput';
import LongTextInput from '../Inputs/LongTextInput';
import SingleDropdown from '../Inputs/SingleDropdown';
import MultipleDropdown from '../Inputs/MultipleDropdown';

const InputCreator = (props) => {
  const createInputs = () => {
    const {
      schema, dataId, onInputSave, data
    } = props;

    return schema.map((field) => {
      switch (field.type) {
        case 'shortText':
          return (
            <TextInput
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              default={field.input.default}
              label={field.label}
              onInputSave={onInputSave}
              validate={field.input.validate}
              value={data[field.key]}
            />
          );
        case 'longText':
          return (
            <LongTextInput
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              default={field.input.default}
              label={field.label}
              onInputSave={onInputSave}
              validate={field.input.validate}
              value={data[field.key]}
            />
          );
        case 'singleDropdown':
          return (
            <SingleDropdown
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              defaultOption={field.input.default}
              label={field.label}
              onInputSave={onInputSave}
              options={field.input.options}
              selectedOption={data[field.key]}
              validate={field.input.validate}
            />
          );
        case 'multipleDropdown':
          return (
            <MultipleDropdown
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              defaultOption={field.input.default}
              label={field.label}
              onInputSave={onInputSave}
              options={field.input.options}
              selectedOptions={data[field.key]}
              validate={field.input.validate}
            />
          );
        default:
          return null;
      }
    });
  };

  return <ColumnContainer alignItems="flex-start">{createInputs()}</ColumnContainer>;
};

InputCreator.propTypes = {
  schema: PropTypes.array.isRequired,
  dataId: PropTypes.string.isRequired,
  onInputSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default InputCreator;
