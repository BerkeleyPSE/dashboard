import validators from '../../helpers/validators';
import { CLASSES, SUBJECTS, POSITIONS, YEARS, IS_EXEC, CAREERS } from './brother_options';
import MEDIA_TYPES from './media_types';

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
    label: 'PSE Class',
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
    key: 'majors',
    type: 'multipleDropdown',
    input: {
      options: SUBJECTS,
      default: [],
      validate: value => validators.validateMultipleDropdown(value, SUBJECTS, 'majors')
    }
  },
  {
    label: 'Minor(s)',
    key: 'minors',
    type: 'multipleDropdown',
    input: {
      options: SUBJECTS,
      default: [],
      validate: value => validators.validateMultipleDropdown(value, SUBJECTS, 'minors')
    }
  },
  {
    label: 'Is Executive?',
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
    type: 'multipleDropdown',
    input: {
      options: CAREERS,
      default: [],
      validate: value => validators.validateMultipleDropdown(value, CAREERS, 'careerInterests')
    }
  },
  {
    label: 'Previous Positions',
    key: 'previousPositions',
    type: 'multipleDropdown',
    input: {
      options: POSITIONS,
      default: [],
      validate: value => validators.validateMultipleDropdown(value, POSITIONS, 'positions')
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
  },
  {
    label: 'Media URLs',
    key: 'mediaUrls',
    type: 'mediaInput',
    input: {
      default: MEDIA_TYPES,
      validate: value => validators.validateMediaInput(value)
    }
  }
];
