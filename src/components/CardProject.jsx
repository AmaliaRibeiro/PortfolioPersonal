import button from './Button.module.css'

export const CardProject = () => {
    const Styles = { color: 'grey', textAlign: 'center', marginLeft: '520px',}
    return (
        <>

            <h2 style={Styles}> PROYECTOS </h2>

            <div className={button.containerCardPro}>
                <div className={button.card6}>
                    <div className={button.cardProject}>
                        <h3> Ecommers Vitinícola </h3>
                        <a href="https://terra-rossa-page.vercel.app/" target="_blank">
                            <img src="./images/imgProjects/terraRossa.png"
                                alt="Imagen proyecto Terra"
                                style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
                <div className={button.card6}>
                    <div className={button.cardProject}>
                        <h3> Registro de pacientes </h3>
                        <a href="https://sweet-crisp-ba6a02.netlify.app/" target="_blank">
                            <img src="./images/imgProjects/RegistroVeterinaria.png"
                                alt="Imagen registro veterinaria"
                                style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
                <div className={button.card6}>
                    <div className={button.cardProject}>
                        <h3> Cotizador de criptomonedas </h3>
                        <a href="https://luminous-figolla-ea5dad.netlify.app/" target="_blank">
                            <img src="./images/imgProjects/cotizador.png"
                                alt="Imagen cotizador"
                                style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
                <div className={button.card6}>
                    <div className={button.cardProject}>
                        <h3> Administrador de gastos </h3>
                        <a href="https://silver-khapse-e1633a.netlify.app" target="_blank">
                            <img src="./images/imgProjects/planiGastos.png"
                                alt="Imagen gastos"
                                style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
                <div className={button.card6}>
                    <div className={button.cardProject}>
                        <h3> Planificador de gastos </h3>
                        <a href="https://playful-chebakia-3e5828.netlify.app/" target="_blank">
                            <img src="./images/imgProjects/ammaStock.png"
                                alt="Imagen stock amma"
                                style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
                <div className={button.card6}>
                    <div className={button.cardProject}>
                        <h3> Simulacion Mercado Libre </h3>
                        <a href="https://mercado-liebre-page.vercel.app/" target="_blank">
                            <img src="./images/imgProjects/mercadoLiebre.png"
                                alt="Imagen mercado"
                                style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}