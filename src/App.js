import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


function App() {
  return (
   
  //<Container fluid className="bg-body-tertiary" style={{height:'100vh',backgroundColor:' #CCCCCC'}}> 
    <div style={{backgroundColor:'rgb(51, 41, 60)',margin:'0'}}>
             <Navbar collapseOnSelect expand="lg" variant='light' data-bs-theme="dark" >
        <Navbar.Brand href="#home" className='logo' ><h1 style={{fontFamily:'"Dancing Script", cursive',fontWeight:'700'}}>My_Portfolio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-5 d-flex justify-content-center align-items-center">
            <Nav.Link href='#home'><li>Home</li></Nav.Link>
            <Nav.Link href='#about' ><li>About</li></Nav.Link>
            <Nav.Link href='#skills'><li>Skills</li></Nav.Link>
            <Nav.Link href='#contact'  ><li>Contact</li></Nav.Link>
          </Nav>
        </Navbar.Collapse>
         </Navbar>
         
         <Home/>
         <About/>
         <Skills/>
         <Contact/>
         <Footer/>
         </div>
       // </Container>
  
  );
}

export default App;
