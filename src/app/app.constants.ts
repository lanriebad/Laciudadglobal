import {environment} from "../environments/environment";

export const APP_ID = 'cons';

export const APP_URLs = {
  INITIALIZE_GUEST_TOKEN_URL: `http://localhost:8084/auth/guest`,
  GUEST_TOKEN_URL: `${environment.BASE_URL}/auth/guest`,
  RESET_PASSWORD_URL: `${environment.BASE_URL}/reset/password.json`,
  REFRESH_TOKEN_URL: `${environment.BASE_URL}/auth/refresh`,
  AUTH_REGISTER_URL: `${environment.BASE_URL}/auth/register`,
  AUTH_LOGIN_URL: `${environment.BASE_URL}/auth/login`,
  GET_ROLES_URL: `${environment.BASE_URL}/secure/construction/roles`,
  // CREATE_CONSTRUCTION_PROJECT: `${environment.BASE_URL}/secure/construction.json`,
  CREATE_CONSTRUCTION_PROJECT: `${environment.BASE_URL}/secure/construction/photos.json`,
  DELETE_CONSTRUCTION_PROJECT: `${environment.BASE_URL}/secure/delete/construction/photo.json`,
  RETRIEVE_CONSTRUCTION_PROJECT: `${environment.BASE_URL}/secure/construction/photo/details.json`,
  UPDATE_CONSTRUCTION_PROJECT: `${environment.BASE_URL}/secure/update/construction/photo.json`,

  FETCH_PROJECTS: `${environment.BASE_URL}/get/construction/photos.json`,
  FETCH_PROJECT_DETAILS: `${environment.BASE_URL}/construction/photo/details.json`,

  CREATE_ELECTRICAL_PROJECT: `${environment.BASE_URL}/secure/electrical.json`,
  GET_CONSTRUCTION_DETAILS: `${environment.BASE_URL}/secure/construction`,
  GET_ELECTRICAL_DETAILS: `${environment.BASE_URL}/secure/electrical`,
  GET_ALL_CONSTRUCTION_URL: `${environment.BASE_URL}/secure/get/construction/details`,
  GET_ALL_ELECTRICAL_URL: `${environment.BASE_URL}/secure/get/electrical/details`,
  // GET_ALL_CONSTRUCTION_PROJECTS_URL: `${environment.BASE_URL}/secure/getAll/construction/photos/paged`,
  GET_ALL_CONSTRUCTION_PROJECTS_URL: `${environment.BASE_URL}/secure/get/construction/photos.json`,
  GET_ALL_ELECTRICAL_PROJECTS_URL: `${environment.BASE_URL}/secure/getAll/electrical/photos/paged`,

  GET_PROJECT_COMPLETION_LIST:`${environment.BASE_URL}/secure/project/lov.json`,
  UPLOAD_IHS_POLICY: `${environment.BASE_URL}/secure/add/safety/certificate`,
  GET_IHS_POLICY: `${environment.BASE_URL}/safety/certificates`,

  CONTACT_US_URL: `${environment.BASE_URL}/contact.json`
};
