import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export class TodoComponent extends Component {

constructor(props){
    super()
}

  render() {
    return (
      <div>
        <Row>
          <Form>
            <Form.Check
              type="checkbox"
              id={this.props.id}
              label={this.props.text}
              checked={this.props.completed}
              onChange={() => this.props.handleClick(this.props.id)}
            />
            <Button onClick={() => this.props.thrash(this.props.id)}>Thrash</Button>
          </Form>
        </Row>
      </div>
    );
  }
}

export default TodoComponent;
