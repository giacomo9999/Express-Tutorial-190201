import React from "react";
import { Card } from "semantic-ui-react";

class GuestBook extends React.Component {
  state = { SignatureOfGuest: "", MessageOfGuest: "" };

  handleSignatureOfGuest = e => {
    this.setState({ SignatureOfGuest: e.target.value });
  };

  handleMessageOfGuest = e => {
    this.setState({ MessageOfGuest: e.target.value });
  };

  addToGuestBook = e => {
    e.preventDefault();
    this.setState({
      SignatureOfGuest: e.target.value,
      MessageOfGuest: e.target.value
    });
  };

  render() {
    return (
      <Card centered={true}>
        <Card.Content
          textAlign="center"
          header="Guest Book"
          //   meta="Friend"
          //   description="Elliot is a sound engineer living in Nashville who enjoys
          //   playing guitar and hanging with his cat."
        />
      </Card>
    );
  }
}

export default GuestBook;
