import validators from '../../helpers/validators';
import { YEARS, YES_NO, INTERVIEW_SLOTS, HEAR } from './application_options';

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
    label: 'Berkeley Email',
    key: 'email',
    type: 'shortText',
    input: {
      default: 'NO EMAIL SPECIFIED',
      validate: value => validators.validateString(value, 'email')
    }
  },
  {
    label: 'Phone Number',
    key: 'phone',
    type: 'shortText',
    input: {
      default: 'NO PHONE SPECIFIED',
      validate: value => validators.validateString(value, 'phone')
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
    label: 'Major(s)',
    key: 'major',
    type: 'shortText',
    input: {
      default: 'NO MAJOR SPECIFIED',
      validate: value => validators.validateSingleDropdown(value, 'major')
    }
  },
  {
    label: 'Minor(s)',
    key: 'minor',
    type: 'shortText',
    input: {
      default: 'NO MINOR SPECIFIED',
      validate: value => validators.validateString(value, 'minor')
    }
  },
  {
    label: 'Please list your current and expected commitments for the semester.',
    key: 'commitments',
    type: 'shortText',
    input: {
      default: 'NO COMMITMENTS SPECIFIED',
      validate: value => validators.validateString(value, 'commitments')
    }
  },
  {
    label: 'What would you do with a free weekend in Berkeley?',
    key: 'freeWeekend',
    type: 'shortText',
    input: {
      default: 'NO ANSWER SPECIFIED',
      validate: value => validators.validateString(value, 'freeWeekend')
    }
  },
  {
    label: 'Are you available for our Invite Only event, Friday (3/16) at 8pm?',
    key: 'inviteOnly',
    type: 'singleDropdown',
    input: {
      options: YES_NO,
      default: YES_NO[0],
      validate: value => validators.validateSingleDropdown(value, YES_NO, 'inviteOnly')
    }
  },
  {
    label: 'When would you like to interview?',
    key: 'interview1',
    type: 'singleDropdown',
    input: {
      options: INTERVIEW_SLOTS,
      default: INTERVIEW_SLOTS[0],
      validate: value => validators.validateSingleDropdown(value, INTERVIEW_SLOTS, 'interview1')
    }
  },
  {
    label: 'When is your alternate choice to interview?',
    key: 'interview2',
    type: 'singleDropdown',
    input: {
      options: INTERVIEW_SLOTS,
      default: INTERVIEW_SLOTS[INTERVIEW_SLOTS.length - 1],
      validate: value => validators.validateSingleDropdown(value, INTERVIEW_SLOTS, 'interview2')
    }
  },
  {
    label: 'Are you available for PMT, Monday nights from 7-10pm?',
    key: 'pmtAvailability',
    type: 'singleDropdown',
    input: {
      options: YES_NO,
      default: YES_NO[0],
      validate: value => validators.validateSingleDropdown(value, YES_NO, 'pmtAvailability')
    }
  },
  {
    label: 'How did you hear about us?',
    key: 'hear',
    type: 'singleDropdown',
    input: {
      options: HEAR,
      default: HEAR[0],
      validate: value => validators.validateSingleDropdown(value, HEAR, 'hear')
    }
  },
  {
    label: 'Additional Information',
    key: 'additionalInformation',
    type: 'longTextDropdown',
    input: {
      default: 'NOT SPECIFIED',
      validate: value => validators.validateString(value, 'additionalInformation')
    }
  }
];
