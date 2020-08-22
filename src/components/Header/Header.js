import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default () =>
    <div className="px-2 pt-1">
        <Navbar expand="sm" bg="dark" variant="dark" className="rounded">

            <Navbar.Brand style={{color: "#696969"}}>SWV Schools</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="nav-link px-4" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link px-4" href="/aluno">Alunos</Nav.Link>
                <Nav.Link className="nav-link px-4" href="/turma">Turmas</Nav.Link>
            </Nav>
        </Navbar>
    </div>