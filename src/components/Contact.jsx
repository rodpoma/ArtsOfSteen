import React from "react";
import {Form, Col, Container} from "react-bootstrap";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        result => {
          console.log(result.text);
          swal("email sent!");
        },
        error => {
          console.log(error.text);
          swal("something went wrong!");
        }
      );
  }
  return (
    <Container className="page">
      <Container>
        <h1
          style={{
            fontSize: "3vw",
            color: "#1c2a48",
            marginBottom: "5vh",
          }}
        >
          Contact Me!
        </h1>
        <Container
          style={{
            height: "50vh",
            width: "70vw",
          }}
        >
          <Form onSubmit={sendEmail}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="user_email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control name="user_email" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control name="subject" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                style={{
                  height: "20vh",
                }}
              />
            </Form.Group>
            <button type="submit" className="button">
              Submit
            </button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
