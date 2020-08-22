import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Modal, Table } from 'react-bootstrap';
import axios from 'axios';


const CardVisualizarAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [refresh, setRefresh] = useState(1);

    useEffect(() => {
        axios.get('http://swvschools.swvsoftware.com.br/api/alunos?')
            .then((response) => {
                setAlunos(response.data);
            })
    }, [refresh]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var count = refresh;
    const trueRefresh = () => {
        count++;
        setRefresh(count);
    }
    return (
        <>
            <Card className="rounded-0">
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title className="pl-3"><h2><b>Visualizar Alunos</b></h2></Card.Title>
                        </Col>
                        <Col>
                            <Button to="/aluno" className="btn btn-primary float-right px-5"
                                onClick={handleShow}
                                onMouseOver={trueRefresh}
                            >
                                <b>Exibir</b>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Modal centered size="xl" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Resultado da busca - Alunos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Table striped bordered hover>
                            <thead style={{
                                background: "#696969",
                                color: "white",
                                textAlign: "center",
                                border: "2px solid black"
                            }}>
                                <tr>
                                    <th style={{border: "2px solid black"}}>Aluno</th>
                                    <th style={{border: "2px solid black"}}>Data de Nascimento</th>
                                    <th style={{border: "2px solid black"}}>Sexo</th>
                                    <th style={{border: "2px solid black"}}>Turma</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: "center"}}>
                                {alunos.map((aluno) => (
                                    <tr key={aluno.id_aluno}>
                                        <td style={{border: "2px solid black"}}>{aluno.nome}</td>
                                        <td style={{border: "2px solid black"}}>{aluno.data_nascimento}</td>
                                        <td style={{border: "2px solid black"}}>{aluno.sexo}</td>
                                        <td style={{border: "2px solid black"}}>{aluno.nome_turma}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="px-5 py-2">
                        Fechar
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CardVisualizarAluno;