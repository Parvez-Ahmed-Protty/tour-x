import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const TourPackage = () => {
  return (
    <div className="my-5">
      <div className="tour-title">
        <h5 className="default-color fw-bold">Choose Your Package</h5>
        <h1 className="fw-bold">
          Select Your Best Package <br /> For Your Travel
        </h1>
      </div>
      <div className="tour-card">
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/RhcJ5Yj/pd-thumb-5f0185b5.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
                <button className="btn mx-1 default-bg text-white border-0 rounded-pill ">
                  Book Now
                </button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TourPackage;
