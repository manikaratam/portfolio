import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <Container fluid id="contact" className="contact-section">
      <Container>
        <Row className="align-items-center g-5">

          <Col lg={5} md={12} className="contact-heading">
            <span className="contact-subtitle">GET IN TOUCH</span>
            <h2>
              Let's <span>Connect.</span>
            </h2>
            <p>
              I'm always interested in connecting with developers,
              discussing technology, and exploring new career
              opportunities in backend development.
            </p>
          </Col>

          <Col lg={7} md={12}>
            <div className="contact-details">

              <a
                href="tel:+918919297994"
                className="contact-item"
              >
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>+91 89192 97994</p>
                </div>
              </a>

              <a
                href="mailto:manikantakaratam7@gmail.com"
                className="contact-item"
              >
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>manikantakaratam7@gmail.com</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h5>Location</h5>
                  <p>India</p>
                </div>
              </div>

              <div className="contact-message">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>
                  Open to connecting about Java Backend Development,
                  software engineering, and exciting opportunities.
                </span>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Contact;