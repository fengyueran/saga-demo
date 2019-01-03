import { ActionType } from './actions';

const initState = {
  cats: [],
  dogs: []
};

const animalState = (state = initState, action) => {
  switch (action.type) {
    case ActionType.DATA_GETTED:
      return { ...state, cats: action.cats, dogs: action.dogs };
    default:
      return state;
  }
};

export default animalState;