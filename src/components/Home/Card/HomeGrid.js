import React from 'react';
import HomeCard from './Card';
import AlunoCard from './AlunoCard';
import TurmaCard from './TurmaCard';
import PesquisaHome from './PesquisaHome';
import { Container, Row, Col } from 'react-bootstrap';


const HomeGrid = () => (

    <Container fluid>
        <Row className="p-2">
            <HomeCard />
        </Row>
        <div className="px-4">
            <PesquisaHome />
        </div>
        <Row className="px-4">
            <Col>
                <AlunoCard />
            </Col>
            <Col>
                <TurmaCard />
            </Col>
        </Row>
    </Container>


);

export default HomeGrid;