import React from 'react';
import CardHeaderAluno from "./CardHeaderAluno";
import CardCadastroAluno from "./CardCadastroAluno";
import CardPesquisaAluno from "./CardPesquisaAluno";
import CardVisualizarAluno from "./CardVisualizarAluno";
import { Container, Row, Col } from 'react-bootstrap';


const AlunoGrid = () => (

    <Container fluid>
        <Row className="p-2">
            <CardHeaderAluno />
        </Row>
        <Row className="px-4">
            <Col>
                <CardCadastroAluno />
            </Col>
            <Col>
                <CardPesquisaAluno />
            </Col>
        </Row>
        <Row className="px-4 pt-4">
            <Col>
                <CardVisualizarAluno />
            </Col>
        </Row>
    </Container>


);

export default AlunoGrid;