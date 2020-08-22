import React from 'react';
import CardHeaderTurma from "./CardHeaderTurma";
import CardCadastroTurma from "./CardCadastroTurma";
import CardPesquisaTurma from "./CardPesquisaTurma";
import CardVisualizarTurma from "./CardVisualizarTurma";
import { Container, Row, Col } from 'react-bootstrap';


const TurmaGrid = () => (

    <Container fluid>
        <Row className="p-2">
            <CardHeaderTurma />
        </Row>
        <Row className="px-4">
            <Col>
                <CardCadastroTurma />
            </Col>
            <Col>
                <CardPesquisaTurma />
            </Col>
        </Row>
        <Row className="px-4 pt-4">
            <Col>
                <CardVisualizarTurma />
            </Col>
        </Row>
    </Container>


);

export default TurmaGrid;