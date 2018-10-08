import React, { Component } from "react";
import PropTypes from "prop-types";
// import ReactRouterPropTypes from 'react-router-prop-types';

import {
  Button,
  Grid,
  Header,
  Form,
  Segment,
  Message,
  Icon,
  Dimmer,
  Loader
} from "semantic-ui-react";

export default class Login extends Component {
  static propTypes = {
    // history: ReactRouterPropTypes.history.isRequired
  }
  
  static contextTypes = {
    authUser: PropTypes.object
  };
 
  state = {
    // email: "",
    // password: "",
    error: "",
    loading: ""
  };

 

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ""
    });
  };

  onSubmit = () => {
    this.setState({
      loading: true
    });
  };

  // TODO: use byPropKey:
  //   <input
  //   value={username}
  //   onChange={event => this.setState(byPropKey('username', event.target.value))}
  //   type="text"
  //   placeholder="Full Name"
  // />

  render() {
    if (this.context.authUser) return <div />;
    return (
      <div>
        {this.state.loading && (
          <Dimmer inverted active>
            {" "}
            <Loader size="massive" />
          </Dimmer>
        )}
        <Grid
          textAlign="center"
          style={{
            marginTop: "20px",
            height: "100%"
          }}
          verticalAlign="middle"
        >
          <Grid.Column
            style={{
              maxWidth: 450
            }}
          >
            <Header as="h2" color="teal" textAlign="center">
              <Icon name="heartbeat" size="huge" /> Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  name="email"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  name="password"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.onChange}
                />{" "}
                {this.state.error !== "" && (
                  <Message>
                    <p>
                      <Icon name="warning sign" />
                      {this.state.error}
                    </p>
                  </Message>
                )}
                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              <a href="/signup">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}