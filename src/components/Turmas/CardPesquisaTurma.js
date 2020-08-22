import React, { useState, useEffect } from 'react';
import { Button, Card, Form, InputGroup, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


const CardPesquisaTurma = () => {
    const [search, setSearch] = useState('');
    const [turmas, setTurmas] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const params = {};
        if (search) {
            params.nome = search;
        }
        axios.get('http://swvschools.swvsoftware.com.br/api/turmas?', { params })
            .then((response) => {
                setTurmas(response.data);
            })
    }, [search, refresh]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const trueRefresh = () => setRefresh(true);

    return (
        <>
            <Card className="rounded-0">
                <Card.Body>
                    <Card.Title><b>Pesquisar Turma</b></Card.Title>
                    <Form>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="rounded-0">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                className="rounded-0"
                                type="search"
                                placeholder="Descrição Turma"
                                value={search}
                                onChange={(ev) => { setSearch(ev.target.value); setRefresh(false); }}
                            />
                        </InputGroup>
                    </Form>
                    <Button to="/aluno" className="btn btn-primary float-right" onClick={handleShow}
                        onMouseOver={trueRefresh}
                    >
                        <b>Buscar Turma</b>
                    </Button>
                </Card.Body>
            </Card>

            <Modal centered size="xl" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Resultado da Busca - Turmas</Modal.Title>
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
                                    <th style={{border: "2px solid black"}}>Turma</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: "center"}}>
                                {turmas.map((turma) => (
                                    <tr key={turma.id_turma}>
                                        <td style={{border: "2px solid black"}}>{turma.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CardPesquisaTurma;