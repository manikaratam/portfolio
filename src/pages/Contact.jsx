import React from 'react'
import { Container ,Row,Col } from 'react-bootstrap'

function Contact() {
  return (
    <Container fluid id='contact'>
        <Container style={{margin:'50px 0 20px '}}>
        <Row>
            <Col lg={6} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center " style={{fontSize:'60px',fontWeight:'800',color:'white'}}>
                Contact
            </Col>
            <Col lg={6} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center p-5">
                <p style={{color:'white'}}>Mobile : 8919297994</p>
                <p style={{color:'white'}}>Email : manikantakaratam7@gmail.com</p>
            </Col>
          </Row>
        </Container>
    </Container>
  )
}

export default Contact
