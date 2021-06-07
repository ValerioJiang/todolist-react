import React, { Component } from "react";
import { FooterComponent } from "../Footer/FooterComponent";
import HeaderComponent from "../Header/HeaderComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import todosData from "../../todosData";
import TodoComponent from "../Todo/TodoComponent";

export class MainContentComponent extends Component {

    

    constructor(){
        super()
        this.state = {todos : todosData}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        console.log(this.state.todos);
        let updatedData = this.state.todos;
        /*
        updatedData.map(n  => {
            if(n.id == id){
                n.completed = !n.completed
            }

            return n
            }
        )
        
        this.setState( prevState => prevState = {
            todos : updatedData
        });
        */
        console.log("Clicked ",id)
        console.log(this.state.todos);
    }

  render() {
    var todoDataComps = this.state.todos.map( n => <TodoComponent key={n.id} text={n.text} id={n.id} completed={n.completed} handleClick={this.handleClick} />);
    return (
      <div>
        <HeaderComponent />

        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card>
                <Card.Body>
                  <Card.Title>To do list</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    
                    {todoDataComps}
                    
                    {/*
                    <Form>
                      <Form.Check type="checkbox" label="Check me out" />
                      <Button>Thrash</Button>
                    </Form>
                    */}
                  </Form.Group>
                  <InputGroup className="mb-3">
                    <Button variant="outline-secondary" id="button-addon1">
                      Add to do
                    </Button>
                    <FormControl
                      aria-describedby="basic-addon1"
                      placeholder="To do description"
                    />
                  </InputGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default MainContentComponent;
