import React from 'react'
import './Home.css'
import HomeImg from '../images/home.svg'
import { FaCalculator } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Home() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className='fs-2'>EZfit</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='d-flex homePage justify-content-center'>
        <img src={HomeImg} className='mt-5'></img>
        <div className='mt-3'>
          <div className='mt-4'>
            <p className='border border-light rounded shadow p-3 msg fs-4'><MdHealthAndSafety className='display-3' /><br />The groundwork for all happiness is good health.</p>
          </div>

          <div className=''>
            <p className='border border-light rounded shadow p-3 fs-4 msg'><IoHeart className='display-3' /><br></br>Every healthy beat is a step towards a longer journey.</p>
          </div>
          <div className=''>
            <p className='border border-light rounded shadow p-3 fs-4 msg'><FaCalculator className='display-3' /><br />Focus on healthy habits, not BMI numbers.</p>
          </div>


        </div>
      </div></div>
  )
}

export default Home