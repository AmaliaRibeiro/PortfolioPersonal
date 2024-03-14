import React, { useState } from "react";
import { Link } from "react-router-dom"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import bgNavbar from './Navbar.module.css'

import { FaHome } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { MdContactMail } from "react-icons/md";
import { Container } from "react-bootstrap";

const iconsStyles = { color: 'white', fontSize: '30px', padding: '20px 10px 10px', paddingTop: '20px', paddingBottom: '20px' }

const Navbar = () => {
  
  
  return (
    <>
      <Container className={bgNavbar.containerMax}>
        <Row className={bgNavbar.divisorVertical} >
          
            <Link className={bgNavbar.a} to="/">
           
        
                <FaHome title="HOME"style={iconsStyles} />
              
            </Link>

          <Link className={bgNavbar.a} to="/about-me">
            
              <MdPersonPin title="SOBRE MÍ" style={iconsStyles} />
            
          </Link>
          
          <Link className={bgNavbar.a} to="/projects">
           
              <TfiBag title="PROYECTOS" style={iconsStyles} />
           
          </Link>
          
          <Link className={bgNavbar.a} to="/contact">
       
          
              <MdContactMail title="CONTACTO" style={iconsStyles} />
         
          </Link>
          

        </Row>
      </Container>
    </>
  )
}

export default Navbar