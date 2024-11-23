// Public imports
import axios from 'axios';
import { del, get, post, put } from './http';
import { getVerifyValues } from '../auth/auth';



//* GetById requests
export const getProfile = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/profile';
    return await get(url, authValue.token);
  } else {
    return null;
  }
};

export const getUser = async () => {
  const authValue = await getVerifyValues();
  if (authValue) {
    const url = pidBaseURL + 'api/user/' + authValue.userId;
    return await get(url, authValue.token);
  } else {
    return null;
  }
};