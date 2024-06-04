import React from 'react'
import { Container} from 'react-bootstrap'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJs,  faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


function Skills() {
  return (
    <Container fluid id='skills' style={{padding:'2% 0 0'}}>
        <div className="item_1">
            <h1 style={{fontSize:'60px',fontWeight:'800',color:'white'}}>Skills</h1>
            <p>Programming skills, or coding skills, are the skills we use to write instructions for computers, applications, or software</p>
        </div>
        <div >
            <Container className="item_2">
                <div className='item_2_1'>
                <FontAwesomeIcon icon={faHtml5} style={{ color: 'orange',fontSize: '50px' }} />
                  <p style={{fontSize:'1.5rem',fontWeight:'600'}} >HTML5</p>
                  <p>HTML5 is the latest version of the Hypertext Markup Language, which is used to create the structure and content of web pages.</p>
                </div>
                <div className='item_2_1'>
                    <FontAwesomeIcon icon={faCss3} style={{ color: 'green',fontSize: '50px' }} />
                  <p style={{fontSize:'1.5rem',fontWeight:'600'}} >CSS3</p>
                  <p>CSS3, the latest version of Cascading Style Sheets, introduces a plethora of new features and enhancements for styling web pages. </p></div>
                <div className='item_2_1'>
                <FontAwesomeIcon icon={faReact} style={{ color: 'cyan',fontSize: '50px' }} />
                  <p style={{fontSize:'1.5rem',fontWeight:'600'}} >REACT</p>
                  <p>React is a JavaScript library for building user interfaces, developed by Facebook. It's widely used for creating interactive and dynamic web applications.</p>
                </div>
                <div className='item_2_1'>
                <FontAwesomeIcon icon={faJava} style={{ color: 'orange',fontSize: '50px' }} />
                  <p style={{fontSize:'1.5rem',fontWeight:'600'}} >CORE JAVA</p>
                  <p>Core Java (Java SE) forms the foundation of Java programming language. It includes the basic libraries, syntax, and concepts necessary for developing Java applications.</p>
                </div>
                <div className='item_2_1'>
                <FontAwesomeIcon icon={faJs} style={{ color: 'red',fontSize: '50px' }} />
                  <p style={{fontSize:'1.5rem',fontWeight:'600'}} >JAVASCRIPT</p>
                  <p>JavaScript is a versatile programming language primarily used for client-side web development, although it's increasingly being used for server-side development as well. </p>
                </div>
                <div className='item_2_1'>
                <FontAwesomeIcon icon={faDatabase} style={{ color: 'black',fontSize: '40px' }} />
                  <p style={{fontSize:'1.5rem',fontWeight:'600'}} >MONGODB</p>
                  <p>MongoDB is a popular NoSQL database that offers a flexible and scalable approach to managing and storing data.</p>
                </div>
            </Container>
        </div>

    </Container>
  )
}

export default Skills
