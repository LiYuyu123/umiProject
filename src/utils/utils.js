// export const getCookie = (name) => {
//   let cname = name + '=';
//   let arr = document.cookie.split(';');
//   for (let i = 0; i < arr.length; i++) {
//     let cookie = arr[i].trim();
//     if (cookie.indexOf(name) === 0) {
//       return cookie.substring(cname.length, cookie.length);
//     }
//   }
//   return '';
// };
//
// export const setCookie = (cname, cvalue, exdays) => {
//   var d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   var expires = 'expires=' + d.toUTCString();
//   document.cookie = cname + '=' + cvalue + '; ' + expires;
// };

import Cookies from 'js-cookie';

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const setCookie = (name, value, day) => {
  return Cookies.set(name, value, { expires: day });
};

export const clearCookie = (name) => {
  return Cookies.remove(name);
};
