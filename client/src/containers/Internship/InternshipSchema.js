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
    label: 'Industry',
    key: 'industry',
    type: 'shortText',
    input: {
      default: 'NO INDUSTRY SPECIFIED',
      validate: value => validators.validateString(value, 'industry')
    }
  },
  {
    label: 'Company',
    key: 'company',
    type: 'shortText',
    input: {
      default: 'NO COMPANY SPECIFIED',
      validate: value => validators.validateString(value, 'company')
    }
  },
  {
    label: 'Position',
    key: 'position',
    type: 'shortText',
    input: {
      default: 'NO POSITION SPECIFIED',
      validate: value => validators.validateString(value, 'position')
    }
  },
  {
    label: 'Location',
    key: 'location',
    type: 'shortText',
    input: {
      default: 'NO LOCATION SPECIFIED',
      validate: value => validators.validateString(value, 'location')
    }
  },
  {
    label: 'Summer Year',
    key: 'summerYear',
    type: 'shortText',
    input: {
      default: 'NO GRADUATION YEAR SPECIFIED',
      validate: value => validators.validateYear(value, 'summerYear')
    }
  }
];
