
import { CardContact } from '../components/CardContact'
import Navbar from '../components/Navbar'

import cardCss from '../components/Card.module.css'

import { Container, Row, Col } from 'react-bootstrap'

export const Contact = () => {

    return (
        <>
            <Container >
                <Row className={cardCss.contenedorHome}>
                    <Col >
                        <CardContact className={cardCss.contenedorHome} />
                    </Col>
                    <Col className={cardCss.contenedorHome}>
                        <Navbar />

                    </Col>
                </Row>
            </Container>
        </>
    )
}