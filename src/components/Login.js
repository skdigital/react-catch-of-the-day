import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired
  };

  render() {
    return (
      <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button
          className="github"
          onClick={() => this.props.authenticate('Github')}
        >
          Log In with Github
        </button>
        <button className="twitter">Log In with twitter</button>
        <button
          className="facebook"
          onClick={() => this.props.authenticate('Facebook')}
        >
          Log In with Facebook
        </button>
      </nav>
    );
  }
}
