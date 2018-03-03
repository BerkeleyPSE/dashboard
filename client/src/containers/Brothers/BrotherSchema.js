import validators from '../../helpers/validators';
import { CLASSES, SUBJECTS, POSITIONS, YEARS, IS_EXEC } from './brother_options';

// add field for type: shortText, longText, radio, dropdown
// if radio or dropdown, add field for options: [opt1, opt2, ...]
// figure out how to do Media URLs

export default [
  {
    label: 'Key',
    key: 'key',
    type: 'shortText',
    input: {
      default: 'NO KEY SPECIFIED',
      validate: value => validators.validateKey(value)
    }
  },
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
    label: 'Image URL',
    key: 'imgUrl',
    type: 'shortText',
    input: {
      default: 'NO IMAGE URL SPECIFIED',
      validate: () => '' // TODO: write a validator function for this
    }
  },
  {
    label: 'PSE Class',
    // key: { label: 'PSE Class', key: 'pseClass' },
    key: 'pseClass',
    type: 'singleDropdown',
    input: {
      options: CLASSES,
      default: CLASSES[0],
      validate: value => validators.validateSingleDropdown(value, CLASSES, 'pseClass')
    }
  },
  {
    label: 'Year',
    // key: { label: 'Year', key: 'year' },
    key: 'year',
    type: 'singleDropdown',
    input: {
      options: YEARS,
      default: YEARS[0],
      validate: value => validators.validateSingleDropdown(value, YEARS, 'year')
    }
  },
  {
    label: 'Hometown',
    key: 'hometown',
    type: 'shortText',
    input: {
      default: 'NO HOMETOWN SPECIFIED',
      validate: value => validators.validateString(value, 'hometown')
    }
  },
  {
    label: 'Major(s)',
    // key: { label: 'Major', key: 'majors' },
    key: 'majors',
    type: 'multipleDropdown',
    input: {
      options: SUBJECTS,
      default: { label: '', value: '' }
      // validate: (value) => validators.validateArrayOfStrings()
    }
  },
  {
    label: 'Minor(s)',
    // key: { label: 'Minor', key: 'minors' },
    key: 'minors',
    type: 'multipleDropdown',
    input: {
      options: SUBJECTS,
      default: { label: '', value: '' }
      // validate: (value) => validators.validateArrayOfStrings()
    }
  },
  {
    label: 'Is Executive?',
    // key: { label: 'value', key: 'isExecutive' },
    key: 'isExecutive',
    type: 'singleDropdown',
    input: {
      options: IS_EXEC,
      default: IS_EXEC[0],
      validate: value => validators.validateSingleDropdown(value, IS_EXEC, 'isExecutive', Boolean)
    }
  },
  {
    label: 'Position',
    // key: { label: 'Position', key: 'position' },
    key: 'position',
    type: 'singleDropdown',
    input: {
      options: POSITIONS,
      default: POSITIONS[0],
      validate: value => validators.validateSingleDropdown(value, POSITIONS, 'position')
    }
  },
  {
    label: 'Career Interests',
    key: 'careerInterests',
    type: 'shortText',
    input: {
      default: 'NO CAREER INTERESTS SPECIFIED',
      validate: value => validators.validateString(value, 'careerInterests')
    }
  },
  {
    label: 'Previous Positions',
    // key: { label: 'Position', key: 'previousPositions' },
    key: 'previousPositions',
    type: 'multipleDropdown',
    input: {
      options: POSITIONS,
      default: { label: '', value: '' }
      // validate: value => validators.validateArrayOfStrings()
    }
  },
  {
    label: 'Biography',
    key: 'bio',
    type: 'longText',
    input: {
      default: 'NO BIOGRAPHY SPECIFIED',
      validate: value => validators.validateString(value, 'bio')
    }
  }
  // TO DO
  // {
  //   label: 'Media URLs',
  //   key: 'mediaUrls'
  // }
];
