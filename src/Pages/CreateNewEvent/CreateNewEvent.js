import React from "react";
import { Form } from "react-bootstrap";
import "./CreateNewEvent.css";

const CreateNewEvent = () => {
  return (
    <div>
      <div className="event-title text-white pt-3">
        <h1 className="fw-bold">Create New Event</h1>
        <div className="">
          <Form className="w-50 mx-auto">
            <Form.Group className="mb-3 fw-bold" controlId="formGroupText">
              <Form.Label>Event Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Neme" />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold" controlId="formGroupText">
              <Form.Label>Image Ulr</Form.Label>
              <Form.Control type="text" placeholder="Set image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Fee</Form.Label>
              <Form.Control type="number" placeholder="Event Fee" />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold" controlId="formGroupText">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Event Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                className="text-white default-bg border-0 fw-bold"
                type="submit"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewEvent;
