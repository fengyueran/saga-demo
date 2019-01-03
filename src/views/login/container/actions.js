export const ActionType = {
  CLEAR_TOKEN: 'CLEAR_TOKEN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

export const Actions = {
  login: (username, password) => ({
    type: ActionType.LOGIN_REQUEST, username, password
  }),
  logout: () => ({
    type: ActionType.LOGOUT
  }),
};