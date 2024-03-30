import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


import './Home.css'

const Link = 'a';

function HomePage(){
   return(
      <div className='home-page'>
         <h3 className='nav-bar'>
            <Navbar data-bs-theme="light" expand='lg'>
               <Container >
                  <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ml-auto">
                     <Nav.Link as={Link} to="/">Home</Nav.Link>
                     <Nav.Link as={Link} to="/about">About</Nav.Link>
                     <Nav.Link as={Link} to="/services">Services</Nav.Link>
                     <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </h3>

         
         
         <div className="body-container text-center">
            <div class="row">
               <div class="col-6">
                  <Button className='btn-aboutMe' variant="outline-primary">
                     About Me
                  </Button>
               </div>
               <div class="col-6">
                     <img className="img-pf" src="/cool-profile.jpg" alt='profile'/>
               </div>
            </div>
            <div class="row">
               <div class="col">
                  1 of 3
               </div>
               <div class="col">
                  2 of 3
               </div>
               <div class="col">
                  3 of 3
               </div>
            </div>
         </div>


            
         
         <footer className="bg-dark text-white p-3">
            <p>@Sok Rithy</p>

         </footer>
            
         
      </div>

      
      
            
   );


}
export default HomePage;