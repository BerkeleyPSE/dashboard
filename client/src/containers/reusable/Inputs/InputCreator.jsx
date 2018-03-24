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
      schema, dataId, onInputSave, onInputDisableChange, data, disabled
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
              disabled={disabled}
              label={field.label}
              onInputSave={onInputSave}
              onInputDisableChange={onInputDisableChange}
              validate={field.input.validate}
              value={data[field.key] || field.input.default}
            />
          );
        case 'longText':
          return (
            <LongTextInput
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              default={field.input.default}
              disabled={disabled}
              label={field.label}
              onInputSave={onInputSave}
              onInputDisableChange={onInputDisableChange}
              validate={field.input.validate}
              value={data[field.key] || field.input.default}
            />
          );
        case 'singleDropdown':
          return (
            <SingleDropdown
              key={field.key}
              dataId={dataId}
              dataKey={field.key}
              defaultOption={field.input.default}
              disabled={disabled}
              label={field.label}
              onInputSave={onInputSave}
              onInputDisableChange={onInputDisableChange}
              options={field.input.options}
              selectedOption={data[field.key] || field.input.default}
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
              disabled={disabled}
              label={field.label}
              onInputSave={onInputSave}
              onInputDisableChange={onInputDisableChange}
              options={field.input.options}
              selectedOptions={data[field.key] || field.input.default}
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
  onInputSave: PropTypes.func,
  onInputDisableChange: PropTypes.func,
  data: PropTypes.object.isRequired
};

InputCreator.defaultProps = {
  onInputSave: () => null,
  onInputDisableChange: () => null
};

export default InputCreator;
