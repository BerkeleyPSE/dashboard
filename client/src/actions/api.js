const BASE_URL = '/api';

export default {
  // user authorization endpoints (authRoutes)
  // LOGIN: '/auth/google/',
  // REQUEST_SIGNUP: `${BASE_URL}/auth/request-signup/`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  GET_SELF: `${BASE_URL}/auth/self`,

  // application endpoints (appRoutes)
  GET_APPS: `${BASE_URL}/app/`,
  UPDATE_APP: `${BASE_URL}/app/update`,
  DELETE_APPS: `${BASE_URL}/app/delete`,

  // brother endpoints (brotherRoutes)
  GET_BROTHERS: `${BASE_URL}/brother/all`,
  GET_ONE_BROTHER: `${BASE_URL}/brother/one`,
  CREATE_BROTHER: `${BASE_URL}/brother/create`,
  UPDATE_BROTHER: `${BASE_URL}/brother/update`,
  DELETE_BROTHER: `${BASE_URL}/brother/delete`,

  // faq endpoints (faqRoutes)
  GET_FAQS: `${BASE_URL}/faqs/`,
  CREATE_FAQ: `${BASE_URL}/faqs/create`,
  UPDATE_FAQ: `${BASE_URL}/faqs/update`,
  DELETE_FAQ: `${BASE_URL}/faqs/delete`,

  // fulltime endpoints (fulltimeRoutes)
  GET_FULLTIMES: `${BASE_URL}/fulltime/`,
  GET_ONE_FULLTIME: `${BASE_URL}/fulltime/one`,
  CREATE_FULLTIME: `${BASE_URL}/fulltime/create`,
  UPDATE_FULLTIME: `${BASE_URL}/fulltime/update`,
  DELETE_FULLTIME: `${BASE_URL}/fulltime/delete`,

  // internship endpoints (internshipRoutes)
  GET_INTERNSHIPS: `${BASE_URL}/internship/`,
  CREATE_INTERNSHIP: `${BASE_URL}/internship/create`,
  UPDATE_INTERNSHIP: `${BASE_URL}/internship/update`,
  DELETE_INTERNSHIP: `${BASE_URL}/internship/delete`,

  // registration form endpoints (regfromRoutes)
  GET_REGFORMS: `${BASE_URL}/regform/`,
  UPDATE_REGFORM: `${BASE_URL}/regform/update`,
  DELETE_REGFORMS: `${BASE_URL}/regform/delete`,

  // user endpoints (userRoutes)
  GET_USER: `${BASE_URL}/user/`,
  CREATE_USER: `${BASE_URL}/user/create`,
  UPDATE_USER: `${BASE_URL}/user/update`,
  DELETE_USER: `${BASE_URL}/user/delete`
};
