import React, { Component } from "react";
import {
  Table,
  Container,
  Button,
  Icon,
  Modal,
  Header
} from "semantic-ui-react";

const starIcon = key => <Table.Cell key={`icon${key}`} icon="star" />;

const renderCardioRow = ({ key, name, length, intensity }) => ({
  cells: [name, length, intensity, starIcon(key)],
  key
});
const renderStrengthRow = ({ key, type, name, reps, weight }) => ({
  cells: [type, name, reps, weight, starIcon(key)],
  key
});
const strengthData = [
  {
    key: "strength-asdfasdf123",
    type: "Back",
    name: "Hammer Strength Row",
    reps: 6,
    weight: 16
  }
];
const cardioData = [
  {
    key: "cardio-asdfasdf1234",
    name: "Cross Country",
    length: 5,
    intensity: 15
  }
];

const addWorkoutButton = (
  <Button icon labelPosition="left">
    <Icon name="plus" />
    Add Workout
  </Button>
);

class Workouts extends Component {
  state = {
    loading: false
  };
  render() {
    return (
      <Container style={{ paddingTop: "1vh" }}>
        <Modal trigger={addWorkoutButton}>
          <Header icon="archive" content="Archive Old Messages" />
          <Modal.Content>
            <p>
              Your inbox is getting full, would you like us to enable automatic
              archiving of old messages?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" inverted>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>

        {/* <Table
          inverted
          color="blue"
          headerRow={["Warmup"]}
          attached="top"
          textAlign="center"
        />
        <Table
          attached
          fixed
          striped
          textAlign="center"
          verticalAlign="middle"
          headerRow={["Name", "Length", "Intensity", "", ""]}
          tableData={cardioData}
          renderBodyRow={renderCardioRow}
        />
        <Table
          inverted
          color="blue"
          headerRow={["Strength"]}
          attached="top"
          textAlign="center"
        />
        <Table
          attached
          fixed
          striped
          singleLine
          textAlign="center"
          verticalAlign="middle"
          headerRow={["Type", "Name", "Reps", "Weight", ""]}
          tableData={strengthData}
          renderBodyRow={renderStrengthRow}
        /> */}
      </Container>
    );
  }
}
export default Workouts;
