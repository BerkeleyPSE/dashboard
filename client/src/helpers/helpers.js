import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';

export default {
  isEmptyOrUndefined: value => isEmpty(value) || isUndefined(value),

  regexIsMatched: (value, regexp) => {
    const match = value.match(regexp);
    return match !== null && match[0] === value;
  }
};
