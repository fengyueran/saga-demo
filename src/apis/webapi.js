const authorize = (username, password) => {
  const isSuccess = username === 'xhm' && password === 'xhm';
  if (isSuccess) {
    const token = 'token';
    return token;
  } 
  throw new Error();
};

export { authorize };