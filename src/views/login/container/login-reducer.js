import { ActionType } from './actions';

const initState = {
  isLoginError: false,
  isLoginPending: false,
};

const loginState = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_TOKEN:
      return { ...state, token: null };
    case ActionType.LOGIN_PENDING:
      return { ...state, isLoginPending: true, isLoginError: false };
    case ActionType.LOGIN_ERROR:
      return { ...state, isLoginPending: false, isLoginError: true };
    case ActionType.LOGIN_FINISH:
      return { ...state, isLoginPending: false };  
    default:
      return state;
  }
};

export default loginState;