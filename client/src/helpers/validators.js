import isString from 'lodash/isString';
// import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';
// import isBoolean from 'lodash/isBoolean';
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

  // it is unwise to validate a name using Regex
  validateName: (name) => {
    if (helpers.isEmptyOrUndefined(name)) return 'Name must not be empty.';
    if (!isString(name)) return `Name must be a String. It is a ${typeof name}`;
    return '';
  },

  // validate ImageURL

  validatePSEClass: (pseClass) => {
    if (helpers.isEmptyOrUndefined(pseClass)) return 'Class must not be empty.';
    if (!isString(pseClass)) return `Class must be a String. It is a ${typeof pseClass}`;
    return '';
  },

  validateYearString: (yearString) => {
    if (helpers.isEmptyOrUndefined(yearString)) return 'Year must not be empty.';
    if (!isString(yearString)) return `Year must be a String. It is a ${typeof yearString}`;

    const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
    if (!YEARS.includes(yearString)) {
      return `Year must be one of ${YEARS.join(', ')}. It's value is ${yearString}`;
    }

    return '';
  },

  validateHometown: (hometown) => {
    if (helpers.isEmptyOrUndefined(hometown)) return 'Hometown must not be empty.';
    if (!isString(hometown)) return `Hometown must be a String. It is a ${typeof hometown}`;
    return '';
  },

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
