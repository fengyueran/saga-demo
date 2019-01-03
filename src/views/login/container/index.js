import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from '../login-page';
import { Actions } from './actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: Actions.login,
  logout: Actions.logout,
}, dispatch);

const LoginPageWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default LoginPageWithData;