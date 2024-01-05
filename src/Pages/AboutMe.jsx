import React from 'react'
import { Skills } from '../components/Skills'
import Navbar from '../components/Navbar'


import cardCss from '../components/Card.module.css'
import button from '../components/Button.module.css'

import { Container, Row, Col } from 'react-bootstrap'

export const AboutMe = () => {
    const Styles = { color: 'white' }
    return (
        <>
            <ul className={button.containerBtn}>
                <li >
                    <a className={button.btnBoton} href="#skills">SKILLS</a>
                </li>
                <li >
                    <a className={button.btnBoton} href="#certificados">CERTIFICADOS</a>
                </li>
                <li >
                    <a className={button.btnBoton} href="#experiencia">EXPERIENCIA</a>
                </li>
                <li >
                    <a className={button.btnBoton} href="#intereses">INTERESES</a>
                </li>
            </ul>

            <Container >
                <Row className={cardCss.contenedorHome}>
                    <Col>
                        <Skills className={cardCss.contenedorHome} />
                    </Col>
                    <Col className={cardCss.contenedorHome}>
                        <Navbar />

                    </Col>
                </Row>
            </Container>

            <div className={button.contenido} id="certificados">
                <h3 className={button.title}>CERTIFICADOS</h3>

                <div className={button.card2}>
                    <div className='containerCertif'>
                        <h5 className={button.certificadoTitle1}>Fullstack Digital House</h5>
                        <img src="./src/images/certificados/fullstackCertificado.png" alt="fullstack" />

                    </div>
                    <div className='containerCertif'>
                        <h5 className={button.certificadoTitle2}>Desarrolladora Frontend</h5>
                        <img src="./src/images/certificados/frontend.png" alt="frontend" />
                    </div>
                    <div className='containerCertif'>
                        <h5 className={button.certificadoTitle2}>Javascript avanzado </h5>
                        <img src="./src/images/certificados/javascriptAvanzado.png" alt="frontend" />
                    </div>
                    <div className='containerCertif'>
                        <h5 className={button.certificadoTitle2}>Programacion orientada a objetos </h5>
                        <img src="./src/images/certificados/orientadoAObjetos.png" alt="frontend" />
                    </div>
                    <div className='containerCertif'>
                        <h5 className={button.certificadoTitle2}>Ingles en el mundo IT </h5>
                        <img src="./src/images/certificados/inglesPolo.png" alt="frontend" />
                    </div>
                    <div className='containerCertif'>
                        <h5 className={button.certificadoTitle2}>Perfeccionamiento de la lengua inglesa </h5>
                        <img src="./src/images/certificados/InglesInglesa.png" alt="frontend" />
                    </div>

                </div>
            </div>



            <div className={button.contenido} id="experiencia">
                <h3 className={button.title}>EXPERIENCIA</h3>
                <div className={button.card3}>
                    <div className={button.cardExperience}>
                        <h4 className={button.title3}>Full-Stack Developer</h4>
                        <p>Fue el primer proyecto que tuve el privilegio de trabajar en el marco del Bootcamp de digital House,
                            junto a mi equipo, trabajamos con la metodologia ágil: Scrum, utilizamos la herramienta Jira para manejo de tiempo, organizacion
                            entrega de sprint, en este proceso pude participar del armado de la idea, objetivos, diseño de wireframes de las distintas interfases de la app.
                            Luego desarrollé diferentes páginas con HTML, CSS, JAVASCRIPT. Para luego seguir agregando modificaciones y mejoras
                            con distintas bibliotecas para contribuir a la mejora de experiencia de usuario, ya sea para validaciones en formularios, session, cookies
                            como tambien la implementacion de dinamismo en toda la pagina.
                            Diseñé la base de datos relacional en MySql, para luego construir una API 
                        </p>
                    </div>
                </div>

            </div>

            <div className={button.contenido} id="intereses">
                <h3 className={button.title}>INTERESES</h3>
                <div className={button.card4}>

                </div>

            </div>
        </>
    )
}