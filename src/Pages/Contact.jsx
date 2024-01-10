import button from '../components/Button.module.css'


export const Contact = () => {
    const Styles = { color: 'white', textAlign: 'center' }
    return (
        <>

            <h2 style={Styles}> CONTACTO </h2>
            <div className={button.card2}>
                
                <div className={button.cardContact}>
                    <p>Si buscas alguien con muchas ganas de crecer, aprender, con entusiasmo, autodidacta
                        dispuesta a resolver problemas, a trabajar en equipo, adaptable a los cambios.
                        Con tiempo full-time, disponible para incorporarse inmediatamente. Podes enviarme un Email directamente.
                    </p>
                    <div className={button.containerBtn}>
                        <p className={button.btnBoton} >Enviar Email</p>
                    </div>
                </div>

            </div>
        </>
    )
}