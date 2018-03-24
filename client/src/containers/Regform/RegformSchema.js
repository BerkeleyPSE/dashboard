export default [
  {
    label: 'Name',
    key: 'name',
    type: 'shortText',
    input: {
      default: 'NO NAME SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Email',
    key: 'email',
    type: 'shortText',
    input: {
      default: 'NO EMAIL SPECIFIED',
      validate: () => true
    }
  }
];
