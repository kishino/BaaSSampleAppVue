
const USER_ACCESS_TOKEN_KEY = 'userAccessToken';

export default {
  getUserAccessToken() {
    return localStorage.getItem(USER_ACCESS_TOKEN_KEY);
  },
  setUserAccessToken(userAccessToken) {
    return localStorage.setItem(USER_ACCESS_TOKEN_KEY, userAccessToken);
  },
};
