import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AnimalsList from '../animals-list';
import { Actions } from './actions';

const mapStateToProps = state => ({
  cats: state.animalState.cats,
  dogs: state.animalState.dogs
});

const mapDispatchToProps = dispatch => bindActionCreators({
  dataRequest: Actions.dataRequest,
}, dispatch);

const AnimalsListWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsList);

export default AnimalsListWithData;