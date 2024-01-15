import { CardProject } from '../components/CardProject'

import Navbar from '../components/Navbar'

import cardCss from '../components/Card.module.css'

import { Container, Row, Col } from 'react-bootstrap'

export const Projects = () => {
    return (
        <>
            <Container >
                <Row className={cardCss.contenedorHome}>
                    <Col>
                        <CardProject className={cardCss.contenedorHome} />
                    </Col>
                    <Col className={cardCss.contenedorHome}>
                        <Navbar />

                    </Col>
                </Row>
            </Container>
            
        </>
    )
}