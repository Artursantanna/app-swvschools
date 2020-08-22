import React, { useState, useEffect } from 'react';
import { Button, Card, Form, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';

const initialValue = {
    nome: '',
    data_nascimento: '',
    sexo: '',
    id_turma: '',
}


const CardCadastroAluno = () => {
    const [values, setValues] = useState(initialValue);
    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        axios.get('http://swvschools.swvsoftware.com.br/api/turmas?')
            .then((response) => {
                setTurmas(response.data);
            })

    }, []);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });

    }

    function onSubmit(ev) {
        ev.preventDefault();
        axios.post('http://swvschools.swvsoftware.com.br/api/setaluno', values)
            .then(response => {
                setShow(true);
            })
            .catch(error => {
                console.log(error)
            });
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="rounded-0">
                <Card.Body>
                    <Card.Title><b>Cadastrar Aluno</b></Card.Title>
                    <Form>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="rounded-0">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className="rounded-0"
                                id="nome"
                                name="nome"
                                type="text"
                                placeholder="Nome Completo do Aluno"
                                onChange={onChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="rounded-0">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className="rounded-0"
                                id="data_nascimento"
                                name="data_nascimento"
                                type="date"
                                placeholder="Data de Nascimento do Aluno"
                                onChange={onChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{ width: "40px" }} className="rounded-0">
                                    <FontAwesomeIcon icon={faCircle} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="select" defaultValue="Sexo" name="sexo" onChange={onChange} className="rounded-0 custom-select">
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
                            <FormControl as="select" defaultValue="Turma" name="id_turma" onChange={onChange} className="rounded-0 custom-select">
                                <option disabled hidden>Turma</option>
                                {turmas.map((turma) => (
                                    <option key={turma.id_turma} value={turma.id_turma}>{turma.nome}</option>
                                ))}
                            </FormControl>
                        </InputGroup>
                    </Form>
                    <Button to="/aluno" className="btn btn-primary float-right" onClick={onSubmit}>
                        <b>Cadastrar Alunos</b>
                    </Button>
                </Card.Body>
            </Card>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Aluno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Cadastro realizado com sucesso!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CardCadastroAluno;