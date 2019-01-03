const ActionType = {
  CLEAR_TOKEN: 'CLEAR_TOKEN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
};

const Actions = {
  login: (username, password) => ({
    type: ActionType.LOGIN_REQUEST, username, password
  }),
  logout: () => ({
    type: ActionType.LOGOUT
  }),
};

const loginState = (state = {}, action) => {
  switch (action.type) {
    case ActionType.CLEAR_TOKEN:
      return { state, token: null };
    default:
      return state;
  }
};

export { Actions };
export default loginState;