import { ActionType } from './actions';

const counterState = (state = 0, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterState;