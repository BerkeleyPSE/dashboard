// node modules
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isBoolean from 'lodash/isBoolean';
import isObject from 'lodash/isObject';

// local
import { isEmptyOrUndefined, regexIsMatched } from './helpers';

/*
  - validateImageURL
*/

export default {
  validateKey: (key) => {
    if (isEmptyOrUndefined(key)) return 'Key must not be empty.';
    if (!isString(key)) return `Key must be a String. It is a ${typeof key}.`;

    const regexp = new RegExp(/([a-z]+\w_[a-z]+\w_?[1-9]*)/);
    if (!regexIsMatched(key, regexp)) return 'Key is invalid. Ensure proper format.';

    return '';
  },

  validateString: (value, field) => {
    if (isEmptyOrUndefined(value)) return `${field} must not be empty.`;
    if (!isString(value)) return `${field} must be a String. It is a ${typeof value}.`;
    return '';
  },

  validateYear: (value, field) => {
    if (isEmptyOrUndefined(value)) return `${field} must not be empty.`;
    if (!isString(value)) return `${field} must be a String. It is a ${typeof value}.`;
    if (value.length !== 4) return `${field} must have a length of exactly 4.`;
    if (value.slice(0, 2) !== '20') return `'${value}' must start with '20'.`;
    return '';
  },

  validateSingleDropdown: (selectedOption, options, field, expectedValueType = String) => {
    if (!isObject(selectedOption)) return `${selectedOption} must be an Object.`;

    const { value } = selectedOption;

    switch (expectedValueType) {
      case Boolean:
        if (!isBoolean(value)) return `${field} must be a Boolean. It is a ${typeof value}.`;
        break;
      default:
        if (isEmptyOrUndefined(value)) return `${field} must not be empty.`;
        if (!isString(value)) return `${field} must be a String. It is a ${typeof value}.`;
    }

    if (!options.includes(selectedOption)) return `${value} is not a valid option.`;

    return '';
  },

  validateMultipleDropdown: (selectedOptions, options, field) => {
    if (!isArray(selectedOptions)) return `${field} must be an Array.`;

    selectedOptions.forEach((option) => {
      if (!isObject(option)) {
        return `Elements of Array must be Objects. ${option} is not.`;
      }
    });

    selectedOptions.forEach((option) => {
      if (isEmptyOrUndefined(option.label) || isEmptyOrUndefined(option.value)) {
        return `${option} is not formatted properly with value and label keys.`;
      }
      if (!options.includes(option)) return `${option.value} is not a valid option.`;
    });

    return '';
  }
};
