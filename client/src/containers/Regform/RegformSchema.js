import validators from '../../helpers/validators';

export default [
  {
    label: 'Name',
    key: 'name',
    type: 'shortText',
    input: {
      default: 'NO NAME SPECIFIED',
      validate: value => validators.validateString(value, 'name')
    }
  },
  {
    label: 'Email',
    key: 'email',
    type: 'shortText',
    input: {
      default: 'NO EMAIL SPECIFIED',
      validate: value => validators.validateString(value, 'email')
    }
  }
];
