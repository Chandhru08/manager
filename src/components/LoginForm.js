import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input>
            label="Email"
            placeholder="abc@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          </Input>
        </CardSection>
        <CardSection>
          <Input>
          label="Password"
          placeholder="password"
          </Input>
        </CardSection>
        <Card>
        <CardSection>
        <Button>
        Login
        </Button>
        </CardSection>
        <Card>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { email: state.auth.email };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
