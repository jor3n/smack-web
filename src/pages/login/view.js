/* eslint-disable no-return-assign */
/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import { loginStyle } from '../../constants/styles';

// Logo Import
const logo = require('../../constants/smackLogo.svg');

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log('Hello ', this.nameInput.value, '!');
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  render () {
    return (
    <div style={loginStyle.container}>
      <form style={loginStyle.form} onSubmit={(e) => this.handleSubmit(e)}>
        <img src={logo} style={loginStyle.logo} />
        <input placeholder='Whats your name?' ref={(c) => this.nameInput = c} style={loginStyle.input} type='text' onChange={(e) => this.handleChange(e)}/>
        {
          this.state.name ? <p>Hello {this.state.name} !</p> : null
        }
        <input style={loginStyle.button} type='submit' value='Login' />
      </form>
    </div>
    );
  }
}

export default Login;
