/* eslint-disable no-return-assign */
/* eslint-disable react/no-set-state */
import React, { Component } from 'react';

// Components
import Sidebar from './sidebar';
import Header from './header';
import Messages from './messages';

/**
  * ### Exercise 2

  *  - Messages
  *    This component shows all messages in the conversation. This component
  *    has as child a SendMessage component to send a message to the selected
  *    user/channel.
  * +----------+------------------------+
  * | Sidebar  | Header                 |
  * |          |------------------------+
  * | Channels | Messages               |
  * |          |                        |
  * |  Users   |                        |
  * |          |                        |
  * |          |                        |
  * |          |                        |
  * |          |------------------------|
  * |          | (Send message)         |
  * +----------+------------------------+
  * 2) Create a chat page with the same structure as explained above.
  *
  * 4) Make the users selectable. When you click on the user, the username should
  *    become red (use Radium). Use setState and Function.prototype.bind() to
  *    accomplish this.
  * How can I apply multiple styles to an element. (see 4)
  *   https://github.com/FormidableLabs/radium
  */

class Chat extends Component {
  render () {
    return (
      <div>
        <Header />
        <Sidebar />
        <Messages />
      </div>
    );
  }
}

export default Chat;
