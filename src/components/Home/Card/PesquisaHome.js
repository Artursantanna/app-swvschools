import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Table, Modal } from 'react-bootstrap';
import axios from 'axios';


const PesquisaHome = () => {
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState('1');

    const [alunos, setAlunos] = useState([]);


    useEffect(() => {
        const params = {};
        if (search) {
            params.nome = search;
        }
        select == 1 ? (
            axios.get('http://swvschools.swvsoftware.com.br/api/alunos?', { params })
                .then((response) => {
                    setAlunos(response.data);
                })
        ) : (
                axios.get('http://swvschools.swvsoftware.com.br/api/turmas?', { params })
                    .then((response) => {
                        setAlunos(response.data);
                    })
            )
    }, [search, select]);


    const [showTable, setShowTable] = useState(false);

    const toggle = () => {
        setShowTable(!showTable);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="search"
                            placeholder="Procuras por ..."
                            value={search}
                            onChange={(ev) => setSearch(ev.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} xs={2}>
                        <Form.Control as="select" defaultValue={select} onChange={(evS) => setSelect(evS.target.value)}>
                            <option value="1">Alunos</option>
                            <option value="2">Turmas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} xs="auto">
                        <Button variant="primary" onClick={handleShow}><b>Pesquisar</b></Button>
                    </Form.Group>
                </Form.Row>
            </Form>

            {select == 1 ?
                (<Modal centered size="xl" show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Resultado da busca - Alunos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Aluno</th>
                                        <th>Data de Nascimento</th>
                                        <th>Sexo</th>
                                        <th>Turma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunos.map((aluno) => (
                                        <tr key={aluno.id_aluno}>
                                            <td>{aluno.nome}</td>
                                            <td>{aluno.data_nascimento}</td>
                                            <td>{aluno.sexo}</td>
                                            <td>{aluno.nome_turma}</td>
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
                </Modal>) :
                (
                    <Modal centered size="xl" show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Resultado da Busca - Turmas</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Turma</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {alunos.map((aluno) => (
                                            <tr key={aluno.id_turma}>
                                                <td>{aluno.nome}</td>
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
                )

            }

        </div>
    );
};

export default PesquisaHome;