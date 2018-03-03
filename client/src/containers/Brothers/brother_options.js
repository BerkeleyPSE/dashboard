const CLASSES = [
  // { label: 'Alpha', value: 'alpha' },
  // { label: 'Beta', value: 'beta' },
  // { label: 'Gamma', value: 'gamma' },
  { label: 'Delta', value: 'delta' },
  { label: 'Epsilon', value: 'epsilon' },
  { label: 'Zeta', value: 'zeta' },
  { label: 'Eta', value: 'eta' },
  { label: 'Theta', value: 'theta' },
  { label: 'Iota', value: 'iota' },
  { label: 'Kappa', value: 'kappa' },
  { label: 'Lambda', value: 'lambda' },
  { label: 'Mu', value: 'mu' },
  { label: 'Nu', value: 'nu' }
  // { label: 'Xi', value: 'xi' },
  // { label: 'Omicron', value: 'omicron' },
  // { label: 'Pi', value: 'pi' },
  // { label: 'Rho', value: 'rho' },
  // { label: 'Sigma', value: 'sigma' },
  // { label: 'Tau', value: 'tau' },
  // { label: 'Upsilon', value: 'upsilon' },
  // { label: 'Phi', value: 'phi' },
  // { label: 'Chi', value: 'chi' },
  // { label: 'Psi', value: 'psi' },
  // { label: 'Omega', value: 'omega' }
];

const SUBJECTS = [
  { label: 'Political Economy', value: 'poli-econ' },
  { label: 'Economics', value: 'econ' },
  { label: 'Business Administration', value: 'business' },
  { label: 'Computer Science', value: 'comp-sci' },
  { label: 'Cognitive Science', value: 'cog-sci' },
  { label: 'EECS', value: 'eecs' },
  { label: 'Media Studies', value: 'media-studies' },
  { label: 'Environmental Economics and Policy', value: 'eep' },
  { label: 'Environmental Science', value: 'enviro-sci' },
  { label: 'Data Science', value: 'data-sci' },
  { label: 'Political Science', value: 'poli-sci' },
  { label: 'Statistics', value: 'stats' },
  { label: 'Public Health', value: 'public-health' },
  { label: 'Psychology', value: 'psych' },
  { label: 'Sustainable Environmental Design', value: 'sus-env-des' }
];

const POSITIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Dir. Alumni Relations', value: 'd-alumni-relations' },
  { label: 'Dir. Brotherhood', value: 'd-brotherhood' },
  { label: 'Dir. Chapter Secretary', value: 'd-chapter-secretary' },
  { label: 'Dir. External Recruitment', value: 'd-external-recruitment' },
  { label: 'Dir. Internal Recruitment', value: 'd-internal-recruitment' },
  { label: 'Dir. Philanthropy', value: 'd-philanthropy' },
  { label: 'Dir. Professional Development', value: 'd-pd' },
  { label: 'Dir. Projects', value: 'd-projects' },
  { label: 'Prospective Member Trainer', value: 'd-pmt' },
  { label: 'Dir. Scholarship', value: 'd-scholarship' },
  { label: 'Dir. Social Media', value: 'd-social-media' },
  { label: 'Dir. Technology', value: 'd-technology' },
  { label: 'VP Administration', value: 'vp-a' },
  { label: 'VP Finance', value: 'vp-f' },
  { label: 'VP Human Resources', value: 'vp-hr' },
  { label: 'VP Marketing', value: 'vp-m' },
  { label: 'President', value: 'president' },
  { label: 'VP Professional Development', value: 'vp-pd' },
  { label: 'VP Public Relations', value: 'vp-pr' }
];

const YEARS = [
  { label: 'Freshman', value: 'freshman' },
  { label: 'Sophomore', value: 'sophomore' },
  { label: 'Junior', value: 'junior' },
  { label: 'Senior', value: 'senior' }
];

const IS_EXEC = [{ label: 'No', value: false }, { label: 'Yes', value: true }];

export { CLASSES, SUBJECTS, POSITIONS, YEARS, IS_EXEC };
