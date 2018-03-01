import validators from '../../helpers/validators';

// add field for type: shortText, longText, radio, dropdown
// if radio or dropdown, add field for options: [opt1, opt2, ...]
// figure out how to do Media URLs

const BROTHER_FIELDS = [
  {
    label: 'Key',
    key: 'key',
    default: 'NO KEY SPECIFIED',
    validate: value => validators.validateKey(value)
  },
  {
    label: 'Name',
    key: 'name',
    default: 'NO NAME SPECIFIED'
  },
  {
    label: 'Image URL',
    key: 'imgUrl',
    default: 'NO IMAGE URL SPECIFIED'
  },
  {
    label: 'PSE Class',
    key: 'pseClass',
    default: 'NO PSE CLASS SPECIFIED'
  },
  {
    label: 'Year',
    key: 'year',
    default: 'NO YEAR SPECIFIED'
  },
  {
    label: 'Hometown',
    key: 'hometown',
    default: 'NO HOMETOWN SPECIFIED'
  },
  {
    label: 'Major(s)',
    key: 'majors',
    default: 'NO MAJORS SPECIFIED'
  },
  {
    label: 'Minor(s)',
    key: 'minor',
    default: 'NO MINORS SPECIFIED'
  },
  {
    label: 'Is Executive?',
    key: 'isExecutive',
    default: 'false'
  },
  {
    label: 'Position',
    key: 'position',
    default: 'Active'
  },
  {
    label: 'Career Interests',
    key: 'careerInterests',
    default: 'NO CAREER INTERESTS SPECIFIED'
  },
  {
    label: 'Previous Positions',
    key: 'previousPositions',
    default: 'NONE'
  },
  {
    label: 'Biography',
    key: 'bio',
    default: 'NO BIOGRAPHY SPECIFIED'
  }
  // {
  //   label: 'Media URLs',
  //   key: 'mediaUrls'
  // }
];

export default BROTHER_FIELDS;
