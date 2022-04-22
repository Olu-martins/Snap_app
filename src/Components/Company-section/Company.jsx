import React from "react";
import { Container, Row, Col } from "reactstrap";
import './company-section.css'

const Company = () => {
  return (
    <section className="company">
   
      <Container>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
              <img src="./assests/images/google-logo.jpg" alt="" />            
          </Col>         
        </Row>
      </Container>
    </section>
  );
};

export default Company;
