export const ActionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
};

export const Actions = {
  increment: () => ({
    type: ActionType.INCREMENT,
  }),
  decrement: () => ({
    type: ActionType.DECREMENT,
  }),
  decrementAsync: () => ({
    type: ActionType.INCREMENT_ASYNC,
  })
};