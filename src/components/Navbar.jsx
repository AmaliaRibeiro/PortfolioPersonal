import React, { useState } from "react";
import { Link } from "react-router-dom"

import Row from 'react-bootstrap/Row';

import bgNavbar from './Navbar.module.css'

import { FaHome } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { MdContactMail } from "react-icons/md";
import { Container } from "react-bootstrap";


const Navbar = () => {
  
  
  return (
    <>
      <Container className={bgNavbar.containerMax}>
        <Row className={bgNavbar.divisorVertical} >
          
            <Link className={bgNavbar.a} to="/">
                <FaHome title="HOME" className={bgNavbar.iconsStyles} />
            </Link>

          <Link className={bgNavbar.a} to="/about-me">
              <MdPersonPin title="SOBRE MÍ" className={bgNavbar.iconsStyles} />
          </Link>
          
          <Link className={bgNavbar.a} to="/projects">
              <TfiBag title="PROYECTOS" className={bgNavbar.iconsStyles} />
          </Link>
          
          <Link className={bgNavbar.a} to="/contact">
              <MdContactMail title="CONTACTO" className={bgNavbar.iconsStyles} />
          </Link>
        </Row>
      </Container>
    </>
  )
}

export default Navbar