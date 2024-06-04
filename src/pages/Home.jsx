import React from 'react'
import { Container,Row,Col, Image, Button } from 'react-bootstrap'
import profile from '../Assets/person.png'
import './home.css'
function Home() {
  return (
    <Container fluid id='home' >
      <Row >
        <Col lg={6} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center p-5">
           <p style={{fontSize:'30px',color:'white'}}>Hello</p>
            <p style={{fontSize:'30px',color:'white'}}>I'm <span style={{fontWeight:'800',fontSize:'50px'}}>Manikanta</span></p>
            <p style={{fontSize:'30px',color:'white'}}>Software Developer</p>
            <p style={{fontSize:'18px',color:'white'}}>Looking for a challenging growth oriented position, where my technical skills can be effectively utilized and improved eventually leading to contribution in the growth of the organization while being resourceful, innovative and flexible.</p>
            <Button variant='success'>Hire me</Button>
        </Col>
        <Col lg={6} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center ">
          <Image src={profile} className='profile'/>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
