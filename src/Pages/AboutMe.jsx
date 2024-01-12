import React from 'react'
import { Skills } from '../components/Skills'
import Navbar from '../components/Navbar'


import cardCss from '../components/Card.module.css'
import button from '../components/Button.module.css'

import { Container, Row, Col } from 'react-bootstrap'


export const AboutMe = () => {
    
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
                <li >
                    <a className={button.btnBoton} href="/AmaliaZulemaRibeiroCV.pdf" download="AmaliaZulemaRibeiroCV.pdf">DESCARGAR CV</a>
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
                    <div className={button.cardCertif}>
                        <h5 className={button.certificadoTitle1}>Fullstack Digital House</h5>
                        <img src="./images/certificados/fullstackCertificado.png" alt="fullstack" />

                    </div>
                    <div className={button.cardCertif}>
                        <h5 className={button.certificadoTitle2}>Desarrolladora Frontend</h5>
                        <img src="./images/certificados/frontend.png" alt="frontend" />
                    </div>
                    <div className={button.cardCertif}>
                        <h5 className={button.certificadoTitle2}>Javascript avanzado </h5>
                        <img src="./images/certificados/javascriptAvanzado.png" alt="frontend" />
                    </div>
                    <div className={button.cardCertif}>
                        <h5 className={button.certificadoTitle2}>Programacion orientada a objetos </h5>
                        <img src="./images/certificados/orientadoAObjetos.png" alt="frontend" />
                    </div>
                    <div className={button.cardCertif}>
                        <h5 className={button.certificadoTitle2}>Ingles en el mundo IT </h5>
                        <img src="./images/certificados/InglesPolo.png" alt="frontend" />
                    </div>
                    <div className={button.cardCertif}>
                        <h5 className={button.certificadoTitle2}>Perfeccionamiento lengua inglesa </h5>
                        <img src="./images/certificados/InglesInglesa.png" alt="frontend" />
                    </div>

                </div>
            </div>



            <div className={button.contenido} id="experiencia">
                <h3 className={button.title}>EXPERIENCIA</h3>
                <div className={button.card3}>
                    <div className={button.cardExperience}>
                        <h4 className={button.title3}>Full-Stack Developer (Ecommers vitinícola)</h4>
                        <p>Fue el primer proyecto que tuve el privilegio de trabajar en el marco del Bootcamp de digital House,
                            junto a mi equipo, trabajamos con la metodologia ágil: Scrum, utilizamos la herramienta Jira para manejo de tiempo, organizacion
                            entrega de sprints, en este proceso pude participar del armado de la idea, objetivos, diseño de wireframes de las distintas interfaces de la app.
                            Luego desarrollé diferentes páginas con HTML, CSS, JAVASCRIPT. Para luego seguir agregando modificaciones y mejoras
                            con distintas bibliotecas para contribuir a las mejoras de experiencia de usuario, ya sea para validaciones en formularios, session, cookies
                            como tambien la implementacion de dinamismo en toda la pagina.
                            Diseñé la base de datos relacional en MySql, se utlizó el framework de Express para Node Js, para construir la aplicacion web, APIs Restful y servidores HTTP.
                            Colaboré con el diseño y creación del dashboard del proyecto siendo responsive con REACT.
                        </p>
                    </div>
                    <div className={button.cardExperience}>
                        <h4 className={button.title3}>Freelance Frontend (Stock zapatos)</h4>
                        <p> Cree el diseño y desarrollé mi pagina de calzados en stock para el emprendimiento que llevo adelante de ventas online,
                            utilicé Vue3 como framework junto a vite como entorno de desarrollo para mostrar todos los zapatos que tengo en stock con sus talles
                            y precios también con su carrito de compras visible.
                        </p>
                    </div>
                    <div className={button.cardExperience}>
                        <h4 className={button.title3}>Freelance Frontend (Formulario de registro)</h4>
                        <p> Desarrollé un formulario de registro para pacientes de una veterinaria, se pueden agregar pacientes, editar, actualizar y eliminarlos,
                            utilicé Vue3 como framework junto a vite como entorno de desarrollo, para darle estilos a la página
                            utilice taildwind CSS.
                        </p>
                    </div>
                </div>

            </div>

            <div className={button.contenido} id="intereses">
                <h3 className={button.title}>INTERESES</h3>
                <div className={button.card4}>
                    <div className={button.cardInterest}>
                        <p>Escuchar música</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Cantar y tocar instrumentos</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Diseñar paginas web</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Entrenar y hacer deportes</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Leer y aprender cosas nuevas</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Bailar</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Juntarme con amigos</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Viajar</p>
                    </div>
                    <div className={button.cardInterest}>
                        <p>Ver series y documentales</p>
                    </div>
                </div>

            </div>
        </>
    )
}