import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VerticalBox, Button } from '@xinghunm/widgets';
import styled from 'styled-components';
import { withRouter } from 'react-router';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  margin: 10px;
`;

const Hint = styled.span`
  color: blue;
`;

const SubmitButton = styled.input`
  -webkit-appearance: none;
  width: 70px;
  height: 20px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;

class LoginPage extends Component {
  componentWillMount() {
    const { logout } = this.props;
    logout();
  }

  get loginHint() {
    const { isLoginPending, isLoginError } = this.props;
    let loginHint;
    if (isLoginError) {
      loginHint = '登录失败';
    } else if (isLoginPending) {
      loginHint = '正在登录...';
    }
    return loginHint;
  }

  handleSubmit = (e) => {
    const { login } = this.props;
    e.preventDefault();
    const username = this.usernameInput.value;
    const password = this.passwordInput.value;
    login(username, password);
  }

  render() {
    const loginHint = this.loginHint;
    return (
      <VerticalBox>
        <Form onSubmit={this.handleSubmit}>
          <Input innerRef={(c) => { (this.usernameInput = c); }} />
          <Input type="password" innerRef={(c) => { (this.passwordInput = c); }} />
          {
            loginHint
            && <Hint>{loginHint}</Hint>
          }
          <Button>
            <SubmitButton type="submit" value="登录" />
          </Button>
        </Form>
      </VerticalBox>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoginError: PropTypes.bool.isRequired,
  isLoginPending: PropTypes.bool.isRequired,
};

export default withRouter(LoginPage);
