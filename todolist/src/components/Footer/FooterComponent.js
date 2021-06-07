import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export class FooterComponent extends Component {
  render() {
    let today = new Date().toLocaleDateString()

    return (
      <div>
        <Container >
          <Row className="justify-content-md-center">
            
            <Col md="auto">Copyright {today} </Col>
            
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default FooterComponent;
