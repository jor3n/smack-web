import React, { Component } from 'react';
import Radium from 'radium';
import { headerStyle } from '../../../constants/styles';

@Radium
export default class Header extends Component {
  render () {
    return (
      <div style={headerStyle.container}>
        <h1 style={headerStyle.title}>Selected User/Channel</h1>
        <div style={headerStyle.right}>
          <p style={headerStyle.username}>LoggedIn User</p>
          <a href='#'>Logout</a>
        </div>
      </div>
    );
  }
}
