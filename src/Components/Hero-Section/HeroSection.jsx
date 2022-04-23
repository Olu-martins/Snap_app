import React from "react";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/hero-img1.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                <b> Welcome to <br /> the Digital Skills and<br /> African career initiative platform</b>
              </h2>
              <p className="mb-5">
               <b>  Combination of expertise, proficiency, and commitment 
                 <br /> leveraging industry experience,along with using analytical
                 <br />   rigor to drive outstanding results for businesses in Nigeria/Africa. 
               </b>  
               
              </p>
            </div>
            <div className="search">              
              <button className="btn">Get Started With Us</button>
            </div>
          </Col>

          <Col lg="6" md="6">            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
