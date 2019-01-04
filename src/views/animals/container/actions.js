export const ActionType = {
  DATA_REQUEST: 'DATA_REQUEST',
  FISH_DATA_REQUEST: 'FISH_DATA_REQUEST',
  DATA_GOT: 'DATA_GOT',
  FISH_DATA_GOT: 'FISH_DATA_GOT',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  START_BG_TASK: 'START_BG_TASK',
  CANCEL_BG_TASK: 'CANCEL_BG_TASK'
};

export const Actions = {
  dataRequest: () => ({
    type: ActionType.DATA_REQUEST
  }),
  fishDataRequest: () => ({
    type: ActionType.FISH_DATA_REQUEST
  }),
  dataGot: (cats, dogs) => ({
    type: ActionType.DATA_GOT, cats, dogs
  }),
  fishDataGot: fishes => ({
    type: ActionType.FISH_DATA_GOT, fishes
  }),
  timeout: () => ({
    type: ActionType.TIMEOUT_ERROR
  }),
  startBGTask: () => ({
    type: ActionType.START_BG_TASK
  }),
  cancelBGTask: () => ({
    type: ActionType.CANCEL_BG_TASK
  }),
};