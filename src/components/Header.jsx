import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdAttachEmail } from "react-icons/md";

import { Outlet } from "react-router-dom"

import bgHeader from './Header.module.css'


const iconsStyles = { color: 'white', fontSize: '40px', padding: '10px' }

const Header = () => {

    return (
        <>
        
                <div className={bgHeader.bgHeader}>
                
                    <a href="mailto:amalita9421@gmail.com" target="_blank"><MdAttachEmail style={iconsStyles}/></a>
                    <a href="https://www.linkedin.com/in/amalia-z-ribeiro/" target="_blank"><FaLinkedin style={iconsStyles} /></a>
                    <a href="https://github.com/AmaliaRibeiro/" target="_blank"><FaGithub style={iconsStyles} /></a>
                    
                </div>
                <Outlet/>
                
               
                
        </>
       
    )

}

export default Header