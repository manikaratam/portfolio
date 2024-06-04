import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
   <Container fluid className='d-flex justify-content-center align-items-center gap-4' style={{height:'80px',borderTop:'2px solid'}}>
         <a href='https://www.facebook.com'><FontAwesomeIcon  icon={faFacebook} style={{ color: 'white',fontSize:'30px'}}  /></a> 
         <a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} style={{ color: 'white',fontSize:'30px'}}  /></a>
         <a href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} style={{ color: 'white',fontSize:'30px'}}  /></a>
         <a href='https://www.github.com'><FontAwesomeIcon icon={faGithub} style={{ color: 'white',fontSize:'30px'}}  /></a>
         <a href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white',fontSize:'30px'}}  /></a>

   </Container>
  )
}

export default Footer
