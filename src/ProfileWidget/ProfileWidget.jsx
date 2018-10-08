import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";

import { Button } from "semantic-ui-react";

export default class ProfileWidget extends Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired
  };
  
  login = () => {
    this.props.history.replace("login");
  };
  
  logout = () => {
  //   dologout
  };

  render() {
    return (
      <div>
        {this.context.authUser ? (
          <div>
            Welcome, <b>{this.context.authUser.displayName.split(" ")[0]}!</b>&nbsp;
            &nbsp;
            <Button as="a" onClick={this.logout}>
              Log Out
            </Button>
          </div>
        ) : (
          <Button as="a" onClick={this.login}>
            Log In
          </Button>
        )}
      </div>
    );
  }
}

ProfileWidget.contextTypes = {
  authUser: PropTypes.object
};
