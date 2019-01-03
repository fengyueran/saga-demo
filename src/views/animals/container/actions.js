export const ActionType = {
  DATA_REQUEST: 'DATA_REQUEST',
  DATA_GETTED: 'DATA_GETTED',
};

export const Actions = {
  dataRequest: () => ({
    type: ActionType.DATA_REQUEST
  }),
  dataGetted: (cats, dogs) => ({
    type: ActionType.DATA_GETTED, cats, dogs
  }),
};