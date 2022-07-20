
const OAUTH_CLIENT_ID = 2;

const BaseUrl = 'https://tranquil-falls-71537.herokuapp.com/';
const apiDomain = '';

export var useDark = global.dark;

var backGroundColor = global.dark ? '#2B2E33' : '#FFFFFF';
var sheetBackgroundColor = global.dark ? '#2B2E33' : '#E5E5E5';
var subHeaderTextColor = global.dark ?   '#E5E5E5':'#474747';
var authInputTextColor = global.dark ?   '#B1B1B1':'#000000';
var authButtonTextColor = global.dark ?   '#ffffff':'#000000';
var permitBackgrounfColor = global.dark ?   '#313336':'#F5F5F5';
var homeBckgroundColor = global.dark ?   '#313336':'#E5E5E5';

const LOGIN_URL = `${BaseUrl}api/v1/users/sign_in`;
const SIGN_UP_URL = `${BaseUrl}/api/v1/users`;



const STORAGE_URL = '';
const PLACCE_API = '';
const SOCKET_SERVER = '';
export {
  LOGIN_URL,
  apiDomain,
  BaseUrl,
  SIGN_UP_URL,
  OAUTH_CLIENT_ID,

  STORAGE_URL,
  PLACCE_API,
  SOCKET_SERVER

};
