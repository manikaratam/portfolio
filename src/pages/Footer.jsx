import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = 'your-email@example.com';

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Container fluid id="contact" className="contact-section">
      <Container>
        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h2>Let's Work <span>Together.</span></h2>
          <p>
            Have an opportunity, a project idea, or just want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <Row className="g-5 align-items-start">
          <Col lg={5}>
            <div className="contact-info">
              <h3>Let's connect</h3>
              <p className="contact-description">
                I'm a Software Developer specializing in Oracle SQL and PL/SQL,
                and I'm expanding my skills in Java, Spring Boot, and Angular.
                I'm interested in connecting with developers and exploring
                backend development opportunities.
              </p>

              <a
                href="mailto:manikantakaratam7@gmail.com"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>
                  <strong>Email</strong>
                  <small>manikantakaratam7@gmail.com</small>
                </span>
              </a>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>
                  <strong>Location</strong>
                  <small>India</small>
                </span>
              </div>

              <div className="contact-socials">
                <p>Find me online</p>

                <a
                  href="https://github.com/manikaratam"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/manikaratam"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Portfolio projects"
                >
                  <FontAwesomeIcon icon={faCode} />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form-card">
              <h3>Send me a message</h3>
              <p>Fill in the details below to get in touch.</p>

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Job opportunity / Project / Other"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button
                      type="submit"
                      variant="success"
                      className="contact-submit"
                    >
                      Send Message
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="ms-2"
                      />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;