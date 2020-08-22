import React, { useState, useEffect } from 'react';
import { Button, Card, Form, InputGroup, FormControl, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';


const CardPesquisaAluno = () => {
    const [searchNome, setSearchNome] = useState('');
    const [searchSexo, setSearchSexo] = useState('');
    const [searchTurma, setSearchTurma] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [turmas, setTurmas] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const params = {};
        if (searchNome) {
            params.nome = searchNome;
        }
        if (searchSexo) {
            params.sexo = searchSexo;
        }
        if (searchTurma) {
            params.id_turma = searchTurma;
        }
        axios.get('http://swvschools.swvsoftware.com.br/api/alunos?', {params})
            .then((response) => {
                setAlunos(response.data);
            })
    }, [searchNome, searchSexo, searchTurma, refresh]);

    useEffect(() => {
        axios.get('http://swvschools.swvsoftware.com.br/api/turmas?')
            .then((response) => {
                setTurmas(response.data);
            })

    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const trueRefresh = () => setRefresh(true);


    return (
        <>
            <Card className="rounded-0">
                <Card.Body>
                    <Card.Title><b>Pesquisar Aluno</b></Card.Title>
                    <Form>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="rounded-0">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className="rounded-0"
                                type="search"
                                placeholder="Nome Completo do Aluno"
                                value={searchNome}
                                onChange={(ev) => { setSearchNome(ev.target.value); setRefresh(false); }}
                            />
                        </InputGroup>

                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{ width: "40px" }} className="rounded-0">
                                    <FontAwesomeIcon icon={faCircle} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="select" defaultValue="Sexo" className="rounded-0 custom-select"
                                onChange={(ev) => { setSearchSexo(ev.target.value); setRefresh(false);}}>
                                <option disabled hidden>Sexo</option>
                                <option value="F">
                                    Feminino
                                </option>
                                <option value="M">
                                    Masculino
                                </option>
                            </FormControl>
                        </InputGroup>

                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{ width: "40px" }} className="rounded-0">
                                    <FontAwesomeIcon icon={faUsers} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="select" defaultValue="Turma" className="rounded-0 custom-select"
                            onChange={(ev) => { setSearchTurma(ev.target.value); setRefresh(false);}}>
                                <option value="">Turma</option>
                                {turmas.map((turma) => (
                                    <option key={turma.id_turma} value={turma.id_turma}>{turma.nome}</option>
                                ))}
                            </FormControl>
                        </InputGroup>
                        <span className="form-control" style={{ border: "0px solid #000" }} />
                        <InputGroup className="mb-2">

                        </InputGroup>
                    </Form>
                    <Button to="/aluno" className="btn btn-primary float-right"
                        onClick={handleShow}
                        onMouseOver={trueRefresh}
                    >
                        <b>Buscar Alunos</b>
                    </Button>
                </Card.Body>
            </Card>

            <Modal centered size="xl" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="p-4"><b>Resultado da busca - Alunos</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Table striped bordered hover>
                            <thead 
                                style={{
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

export default CardPesquisaAluno;