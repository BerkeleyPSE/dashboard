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
    label: 'Berkeley Email',
    key: 'email',
    type: 'shortText',
    input: {
      default: 'NO EMAIL SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Phone Number',
    key: 'phone',
    type: 'shortText',
    input: {
      default: 'NO PHONE SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Year',
    key: 'year',
    type: 'shortText',
    input: {
      default: 'NO YEAR SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Major(s)',
    key: 'major',
    type: 'shortText',
    input: {
      default: 'NO MAJOR SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Minor(s)',
    key: 'minor',
    type: 'shortText',
    input: {
      default: 'NO MINOR SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Please list your current and expected commitments for the semester.',
    key: 'commitments',
    type: 'longText',
    input: {
      default: 'NO COMMITMENTS SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'What would you do with a free weekend in Berkeley?',
    key: 'freeWeekend',
    type: 'longText',
    input: {
      default: 'NO ANSWER SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Are you available for our Invite Only event, Friday (3/16) at 8pm?',
    key: 'inviteOnly',
    type: 'shortText',
    input: {
      default: 'NOT SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'When would you like to interview?',
    key: 'interview1',
    type: 'shortText',
    input: {
      default: 'NOT SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'When is your alternate choice to interview?',
    key: 'interview2',
    type: 'shortText',
    input: {
      default: 'NOT SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Are you available for PMT, Monday nights from 7-10pm?',
    key: 'pmtAvailability',
    type: 'shortText',
    input: {
      default: 'NOT SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'How did you hear about us?',
    key: 'hear',
    type: 'shortText',
    input: {
      default: 'NOT SPECIFIED',
      validate: () => true
    }
  },
  {
    label: 'Additional Information',
    key: 'additionalInformation',
    type: 'longText',
    input: {
      default: 'NOT SPECIFIED',
      validate: () => true
    }
  }
];
