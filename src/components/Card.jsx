import { Link } from "react-router-dom"

import bgCard from './Card.module.css'

const Card = () => {

    return (
        <>
            <div className={bgCard.card}>

                <div className={bgCard.container1}>
                    <img src="./images/AmmaCv.png" alt="foto de perfil" />
                </div>

                <div className={bgCard.container2}>
                    <h5 className="card-title">Amalia Ribeiro</h5>
                    <h4> Frontend Developer</h4>
                    <p className={bgCard.cardText}>
                        Soy autodidacta, obstinada en lograr mis objetivos, como desarrollarme y crecer en el mundo IT, soy paciente a
                        la hora de resolver problemas que requieran presiones de tiempo, tengo un buen desarrollo en relaciones interpersonales.
                        Mi deseo es tener la oportunidad de poder desenvolverme, aprender, seguir adquiriendo experiencia en frontend que es donde
                        encontré mi lugar, donde sé que puedo brindar lo mejor de mí, de igual manera tengo conocimientos en backend
                        con los lenguajes de Java y JavaScript y también trabajé con bases de datos relacionales como MySql y MongoDB
                    </p>
                    <div className="containerBtn">
                        <button className={bgCard.btnBoton}><Link to="/projects">Proyectos</Link></button>
                        <button className={bgCard.btnBoton2}><Link className="btnBoton" to="/contact">Contacto</Link></button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Card