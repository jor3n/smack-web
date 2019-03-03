/* eslint-disable no-return-assign */
/* eslint-disable react/no-set-state */
import React, { Component } from 'react';

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
    <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input placeholder='Whats your name?' ref={(c) => this.nameInput = c} type='text' onChange={(e) => this.handleChange(e)}/>
        {
          this.state.name ? <p>Hello {this.state.name} !</p> : null
        }
        <input type='submit' value='Login' />
      </form>
    </div>
    );
  }
}

export default Login;
