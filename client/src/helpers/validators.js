import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isBoolean from 'lodash/isBoolean';
// import isObject from 'lodash/isObject';

import helpers from './helpers';

/*
  - validate single choice dropdown: isExecutive (t/f), pseClass, currentPosition
  - validate multiple choice dropdown: previousPositions
    - use react-select for these
  - validate multiple-item Array of Strings
    - this could probably be a single String of two items separated by a single comma,
      or two shortText inputs for each career position
  - validateString : (value, field)
  - validateImageURL
*/

export default {
  validateKey: (key) => {
    if (helpers.isEmptyOrUndefined(key)) return 'Key must not be empty.';
    if (!isString(key)) return `Key must be a String. It is a ${typeof key}`;

    const regexp = new RegExp(/([a-z]+\w_[a-z]+\w_?[1-9]*)/);
    if (helpers.regexIsMatched(key, regexp)) return 'Key is invalid. Ensure proper format.';

    return '';
  },

  validateString: (value, field) => {
    if (helpers.isEmptyOrUndefined(value)) return `${field} must not be empty.`;
    if (!isString(value)) return `${field} must be a String. It is a ${typeof value}`;
    return '';
  },

  // can we just use this for booleans as well? specifically for the isExecutive value checker
  validateSingleDropdown: (value, options, field, expectedValueType = String) => {
    if (helpers.isEmptyOrUndefined(value)) return `${field} must not be empty.`;

    switch (expectedValueType) {
      case Boolean:
        if (!isBoolean(value)) return `${field} must be a Boolean. It is a ${typeof value}`;
        break;
      default:
        if (!isString(value)) return `${field} must be a String. It is a ${typeof value}`;
    }

    if (!options.includes(value)) return `${value} is not a valid option.`;

    return '';
  },

  // validateMultipleDropdown
  // validate Major(s), Minor(s), Career Interests, Previous Positions
  validateArrayOfStrings: (arr, field) => {
    if (helpers.isEmptyOrUndefined(arr)) return `${field} must not be empty.`;
    if (!isArray(arr)) return `${field} must be an Array. It is a ${typeof arr}`;

    const errors = [];
    arr.forEach((item) => {
      if (!isString(item)) errors.push(`${item} was found to be a ${typeof item}`);
    });
    if (errors.length) {
      return `Every item in Array must be a String. ${errors.join(', ')}`;
    }

    return '';
  }
};
