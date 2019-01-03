import { ActionType } from './actions';

const initState = {
  cats: [],
  dogs: [],
  fishes: [],
  timeoutError: false,
};

const animalState = (state = initState, action) => {
  switch (action.type) {
    case ActionType.DATA_GOT:
      return { ...state, cats: action.cats, dogs: action.dogs };
    case ActionType.FISH_DATA_GOT:
      return { ...state, fishes: action.fishes };
    case ActionType.TIMEOUT_ERROR:
      return { ...state, timeoutError: true };
    default:
      return state;
  }
};

export default animalState;