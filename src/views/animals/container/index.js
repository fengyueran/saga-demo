import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AnimalsList from '../animals-list';
import { Actions } from './actions';

const mapStateToProps = state => ({
  cats: state.animalState.cats,
  dogs: state.animalState.dogs,
  fishes: state.animalState.fishes,
  timeoutError: state.animalState.timeoutError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  dataRequest: Actions.dataRequest,
  fishDataRequest: Actions.fishDataRequest,
  startBGTask: Actions.startBGTask,
  cancelBGTask: Actions.cancelBGTask,
}, dispatch);

const AnimalsListWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsList);

export default AnimalsListWithData;