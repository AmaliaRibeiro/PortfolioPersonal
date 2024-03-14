import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import button from './Button.module.css'

export const CardContact = () => {
    const Styles = { color: 'grey', textAlign: 'center', marginLeft: '180px' }
    const ubicacionUrl = 'https://www.google.com/maps/place/Posadas,+Misiones/@-27.3962852,-56.0069173,12z/data=!3m1!4b1!4m6!3m5!1s0x9457be7f080496c3:0xccbff374623e7b9a!8m2!3d-27.3621374!4d-55.9008746!16zL20vMDZncXMy?entry=ttu'
    return (
        <>

            <h2 style={Styles}> CONTACTO </h2>
            <div className={button.card5}>

                <div className={button.cardContact}>
                    <p>Si buscas alguien con muchas ganas de crecer, aprender, de aportar a tu equipo entusiasmo, autodidacta
                        dispuesta a resolver problemas, a trabajar en equipo, adaptable a los cambios.
                        Con tiempo full-time, disponible para incorporarse inmediatamente. Podes enviarme un Email directamente.
                    </p>
                    <div className={button.containerBtn}>
                    <a href="mailto:amalita9421@gmail.com" target="_blank" className={button.btnBoton}> Enviar Email</a>
                    </div>
                    <p><MdAttachEmail/> amalita9421@gmail.com</p> <hr/>
                        <p><FaPhoneAlt /> +543764-210156</p>
                </div>
                <div className={button.imgMap}>
                    <img src="./images/mapaPosadas.png" alt="Mapa Posadas" />
                    <div className={button.containerBtn2}>
                        <a className={button.btnBoton2} href={ubicacionUrl} target="_blank" rel="noopener noreferrer"> <FaLocationDot /> Posadas, Misiones-Argentina</a>
                    </div>
                </div>
            </div>
</>
    )
}