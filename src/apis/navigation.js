let _history = null;

const setHistory = (history) => { 
  _history = history;
}; 

const goBack = () => _history.goBack();
const gotoPage = location => _history.push(location);

export { setHistory, goBack, gotoPage };
