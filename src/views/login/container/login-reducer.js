import { ActionType } from './actions';

const loginState = (state = {}, action) => {
  switch (action.type) {
    case ActionType.CLEAR_TOKEN:
      return { state, token: null };
    default:
      return state;
  }
};

export default loginState;