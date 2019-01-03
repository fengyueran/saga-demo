import { delay } from 'redux-saga';

const authorize = (username, password) => {
  const isSuccess = username === 'xhm' && password === 'xhm';
  if (isSuccess) {
    const token = 'token';
    return token;
  } 
  throw new Error();
};


const fetchCats = () => {
  const cats = ['cat1', 'cat2'];
  return cats;
};

const fetchDogs = () => {
  const dogs = ['dog1', 'dog2'];
  return dogs;
};

function* fetchFishes() {
  yield delay(2000);
  const fishes = ['fish1', 'fish2'];
  return fishes;
}

export { 
  authorize, fetchCats, fetchDogs, fetchFishes
};