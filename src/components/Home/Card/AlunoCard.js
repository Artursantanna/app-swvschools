import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AlunoCard = () => (
    <Card className="rounded-0">
        <Card.Body>
            <Card.Title><b>Alunos</b></Card.Title>
            <Card.Text>Gerencie os alunos de uma forma fácil, cadastre, edite e pesquise com poucos clicks.</Card.Text>
            <Link to="/aluno" className="btn btn-primary"><b>Gerenciar Alunos</b></Link>
        </Card.Body>
    </Card>

);

export default AlunoCard;