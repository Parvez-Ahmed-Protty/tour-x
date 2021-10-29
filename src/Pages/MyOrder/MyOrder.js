import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const MyOrder = () => {
  return (
    <>
      <Container className="my-5">
        <Row xs={1} md={3} sm={1} className="g-4">
          <Col>
            <Card className="card-de">
              <Card.Img
                variant="top rounded"
                src="https://i.ibb.co/RhcJ5Yj/pd-thumb-5f0185b5.png"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Dina Jems</Card.Title>
                <Card.Text>
                  <h6>Traveller</h6>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <button className="btn default-bg text-white border-0">
                Cancel
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyOrder;
