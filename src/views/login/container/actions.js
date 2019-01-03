export const ActionType = {
  LOGOUT: 'LOGOUT',
  CLEAR_TOKEN: 'CLEAR_TOKEN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_PENDING: 'LOGIN_PENDING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_FINISH: 'LOGIN_FINISH'
};

export const Actions = {
  login: (username, password) => ({
    type: ActionType.LOGIN_REQUEST, username, password
  }),
  logout: () => ({
    type: ActionType.LOGOUT
  }),
};