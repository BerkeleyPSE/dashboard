const NAVBAR_MAP = {
  HOME_PATH: '/',
  LOGIN_PATH: '/login',
  APPLICATION_PATH: '/applications',
  BROTHERS_PATH: '/brothers',
  FULLTIME_PATH: '/fulltime',
  INTERNSHIP_PATH: '/internship',
  FAQ_PATH: '/faqs',
  REGFORM_PATH: '/regforms',
  PROFILE_PATH: '/profile'
};

const NAVBAR_LINKS = [
  {
    text: 'Home',
    link: NAVBAR_MAP.HOME_PATH
  },
  {
    text: 'Applications',
    link: NAVBAR_MAP.APPLICATION_PATH
  },
  {
    text: 'Brothers',
    link: NAVBAR_MAP.BROTHERS_PATH
  },
  {
    text: 'Fulltime',
    link: NAVBAR_MAP.FULLTIME_PATH
  },
  {
    text: 'Internships',
    link: NAVBAR_MAP.INTERNSHIP_PATH
  },
  {
    text: 'FAQs',
    link: NAVBAR_MAP.FAQ_PATH
  },
  {
    text: 'Registration Form',
    link: NAVBAR_MAP.REGFORM_PATH
  }
];

export { NAVBAR_MAP, NAVBAR_LINKS };
