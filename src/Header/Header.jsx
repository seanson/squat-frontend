import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import ProfileWidget from "../ProfileWidget/ProfileWidget";

const Header = props => (
  <Menu inverted color="blue" borderless attached="top">
    <Menu.Item header as="a" onClick={() => props.history.replace(`/`)}>
      <h3>Squat Farm</h3>
    </Menu.Item>
    <Menu.Item>
      <Link to="/workouts" href="/workouts">Workouts </Link>
    </Menu.Item>
    <Menu.Item position="right">
      <ProfileWidget history={props.history} />
    </Menu.Item>
  </Menu>
);

Header.propTypes = {
  // eslint-disable-next-line react/no-typos
  history: ReactRouterPropTypes.history.isRequired
};

export default Header;
