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

export { authorize, fetchCats, fetchDogs };