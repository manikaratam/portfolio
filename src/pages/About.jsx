import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import './about.css'

function About() {
  return (
    <Container fluid id='about' style={{padding:'150px 0 150px'}}>
          <Row>
            <Col lg={6} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center " style={{fontSize:'60px',fontWeight:'800',color:'white'}}>
                About
            </Col>
            <Col lg={6} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center p-5">
                <p style={{color:'white'}}>Hi there! 👋 I'm <span style={{fontFamily:'"Dancing Script", cursive',fontWeight:'900',fontSize:'40px'}} >Manikanta </span> a passionate and motivated enthusiast eager to embark on my journey in the world of IT sector. I am recent graduate as a proficient Civil Engineering graduate with a strong foundation in web technologies such as HTML, CSS, JavaScript, and React.js. And I'm excited to apply my knowledge to real-world projects.</p>
                <div className="btns" style={{display:'flex',gap:'1.5rem'}}>
                    <Button variant='success'>Download CV</Button>
                    <Button variant='success' href='#contact'>Contact</Button>
                    
                </div>
            </Col>
          </Row>
    </Container>
  )
}

export default About
