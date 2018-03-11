import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';

export const isEmptyOrUndefined = value => isEmpty(value) || isUndefined(value);

export const regexIsMatched = (value, regexp) => {
  const match = value.match(regexp);
  return match !== null && match[0] === value;
};

export const isEqualMD = (selectedOptions, propsSelectedOptions) => {
  if (selectedOptions.length !== propsSelectedOptions.length) return false;
  const currSelected = selectedOptions.map(option => option.value);
  const propsSelected = propsSelectedOptions.map(option => option.value);
  currSelected.forEach((option) => {
    if (!propsSelected.includes(option)) return false;
  });
  return true;
};
