const ActionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const Actions = {
  increment: () => ({
    type: ActionType.INCREMENT,
  }),
  decrement: () => ({
    type: ActionType.DECREMENT,
  })
};

const counterState = (state = 0, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export { Actions };
export default counterState;