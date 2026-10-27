import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './about.css';

function About() {
  return (
    <Container fluid id="about" className="about-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={5} md={12} className="about-heading">
            <span className="about-subtitle">GET TO KNOW ME</span>
            <h2>About Me<span>.</span></h2>
            <p className="about-role">
              Software Developer | Oracle SQL &amp; PL/SQL
            </p>
          </Col>

          <Col lg={7} md={12} className="about-content">
            <p className="about-intro">
              Hi, I'm <span className="about-name">Manikanta</span> 👋
            </p>

            <p>
              I'm a Software Developer with 2 years of experience developing
              and maintaining Hospital Management System (HMS) applications
              using Oracle SQL and PL/SQL. My work involves writing and
              optimizing queries, developing database procedures, functions
              and triggers, troubleshooting production issues, and implementing
              business requirements across healthcare workflows.
            </p>

            <p>
              I enjoy solving real-world problems, improving database
              performance, and building reliable solutions that make
              applications more efficient and maintainable.
            </p>

            <p>
              My next goal is to grow into a Java Backend Developer by
              strengthening my skills in Core Java, JDBC, Spring Boot, REST
              APIs, and database integration. I'm continuously learning and
              building projects to expand my backend development skills and
              contribute to scalable, end-to-end applications.
            </p>

            <div className="about-buttons">
              <Button
                variant="success"
                href="/Manikanta_CV.pdf"
                download
              >
                Download CV
              </Button>

              <Button variant="outline-light" href="#contact">
                Let's Connect
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;