import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TurmaCard = () => (
    <Card className="rounded-0">
        <Card.Body>
            <Card.Title><b>Turmas</b></Card.Title>
            <Card.Text>Gerencie as turmas de uma forma fácil, cadastre, edite e pesquise com poucos clicks.</Card.Text>
            <Link to="/turma" className="btn btn-primary"><b>Gerenciar Turmas</b></Link>
        </Card.Body>
    </Card>

);

export default TurmaCard;