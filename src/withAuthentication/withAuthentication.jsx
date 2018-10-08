import React from "react";
import PropTypes from "prop-types";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };

    getChildContext() {
      return {
        authUser: this.state.authUser
      };
    }

    componentDidMount() {
      // do auth
      //   .onAuthStateChanged(
      //     authUser => (authUser ? this.setState(() => ({ authUser })) : this.setState(() => ({ authUser: null })))
      //   );
    }

    render() {
      return <Component />;
    }
  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object
  };

  return WithAuthentication;
};

export default withAuthentication;
