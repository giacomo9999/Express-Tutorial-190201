import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

import GuestBook from "./components/guestBook.component";

class App extends Component {
  render() {
    return (
      <Container text>
        <Header as="h2" textAlign="center">Guest Book App</Header>
        <GuestBook />
      </Container>
    );
  }
}

export default App;
