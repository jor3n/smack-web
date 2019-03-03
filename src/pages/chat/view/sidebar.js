import React, { Component } from 'react';
import Radium from 'radium';
import { sidebarStyle, sidebarItemStyle } from '../../../constants/styles';

const channels = [
  { id: 'everyone', name: 'Global Smack', onlineUsers: 5 }
];
const users = [
  { id: '1', status: 'online', username: 'Bart' },
  { id: '2', status: 'online', username: 'Fred' },
  { id: '3', status: 'offline', username: 'Sofie' }
];

@Radium
export default class Sidebar extends Component {
  render () {
    return (
      <div style={sidebarStyle.container}>
        <div style={sidebarItemStyle.sidebar}>
          <div style={sidebarStyle.search}>
            Chats
          </div>
          <ul style={sidebarItemStyle.list}>
            {
              channels.map((c) => {
                return <li key={c.id} style={[ sidebarItemStyle.container.base, sidebarItemStyle.container.channel ]}>{c.name}&nbsp;Online Users: {c.onlineUsers}</li>;
              })
            }
            {
              users.map((u) => {
                return <li key={u.id} style={[ sidebarItemStyle.container.base, sidebarItemStyle.container.channel ]}>{u.username}&nbsp;Status: {u.status}</li>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
