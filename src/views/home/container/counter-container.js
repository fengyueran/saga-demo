import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../counter';
import { Actions } from '../../../reducers/counter-reducer';

const mapStateToProps = state => ({
  value: state.counterState,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onIncrement: Actions.increment,
  onDecrement: Actions.decrement,
  onIncrementAsync: Actions.decrementAsync
}, dispatch);

const CounterWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterWithData;