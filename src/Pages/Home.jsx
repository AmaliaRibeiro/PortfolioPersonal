import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Container, Row, Col } from 'react-bootstrap'

import cardCss from '../components/Card.module.css'

export const Home = () => {

    return (
        <>
            <Container >
                <Row className={cardCss.contenedorHome}>
                    <Col >
                        <Card className={cardCss.contenedorHome} />
                    </Col>
                    <Col className={cardCss.contenedorHome}>
                        <Navbar />

                    </Col>
                </Row>
            </Container>
        </>
    )
}