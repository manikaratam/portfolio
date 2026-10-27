import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profile from '../Assets/person.png';
import './home.css';

function Home() {
  return (
    <Container fluid id="home" className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={7} className="home-content">
            <p className="home-greeting">
              HELLO, WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              I'm <span className="home-name">Manikanta</span>
            </h1>

            <h2>
              Software Developer
              <span className="home-highlight"> | Oracle SQL &amp; PL/SQL</span>
            </h2>

            <p className="home-description">
              I have 2 years of experience developing and maintaining
              Hospital Management System applications using Oracle SQL
              and PL/SQL. I enjoy solving complex database problems,
              optimizing queries, and building reliable software solutions.
              Currently, I'm expanding my skills in Java, Spring Boot,
              and REST APIs to grow as a backend developer.
            </p>

            <div className="home-tech-stack">
              <span>Oracle SQL</span>
              <span>PL/SQL</span>
              <span>Java</span>
              <span>Spring Boot</span>
            </div>

            <div className="home-buttons">
              <Button variant="success" href="#contact">
                Let's Connect
              </Button>

              <Button
                variant="outline-light"
                href="#about"
              >
                Explore My Profile
              </Button>
            </div>
          </Col>

          <Col lg={5} md={5} className="home-image-column">
            <div className="profile-wrapper">
              <div className="profile-glow"></div>
              <Image
                src={profile}
                alt="Manikanta - Software Developer"
                className="profile"
                fluid
              />
            </div>
            <p className="profile-caption">
              Building today. Learning for tomorrow.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;