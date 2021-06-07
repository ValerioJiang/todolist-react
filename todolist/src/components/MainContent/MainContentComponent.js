import React, { Component } from "react";
import { FooterComponent } from "../Footer/FooterComponent";
import HeaderComponent from "../Header/HeaderComponent";

export class MainContentComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <FooterComponent />
      </div>
    );
  }
}

export default MainContentComponent;
