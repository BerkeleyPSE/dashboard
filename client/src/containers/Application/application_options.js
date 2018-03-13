const YEARS = [
  { label: 'Freshman', value: 'freshman' },
  { label: 'Sophomore', value: 'sophomore' },
  { label: 'Junior', value: 'junior' },
  { label: 'Junior Transfer', value: 'junior-transfer' },
  { label: 'Senior', value: 'senior' }
];

const YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const INTERVIEW_SLOTS = [
  { label: 'Saturday (3/18), 9am-12pm', value: '3/18-@-9am-12pm' },
  { label: 'Saturday (3/18), 12pm-3pm', value: '3/18-@-12pm-3pm' },
  { label: 'Saturday (3/18), 3pm-6pm', value: '3/18-@-3pm-6pm' },
  { label: 'I cannot make any of these times.', value: 'unavailable' }
];

const HEAR = [
  { label: 'I know a brother.', value: 'brother' },
  { label: 'Flyer/Table on Sproul', value: 'tabling' },
  { label: 'Facebook Event', value: 'facebook' },
  { label: '(Other) Social Media', value: 'social-media' },
  { label: 'Website', value: 'website' }
];

export { YEARS, YES_NO, INTERVIEW_SLOTS, HEAR };
