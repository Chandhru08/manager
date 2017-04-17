import { EMAIL_CHANGED } from './index';

export const emailChanged = (text) => {
 return {
     type: EMAIL_CHANGED,
     payload: text
 };
};
