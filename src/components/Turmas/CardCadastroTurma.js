import React, { useState } from 'react';
import { Button, Card, Form, InputGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const initialValue = {
    nome: '',
}


const CardCadastroTurma = () => {
    const [values, setValues] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });

    }

    function onSubmit(ev) {
        ev.preventDefault();
        axios.post('http://swvschools.swvsoftware.com.br/api/setturma', values)
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
                    <Card.Title><b>Cadastrar Turma</b></Card.Title>
                    <form>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="rounded-0">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                className="rounded-0"
                                id="nome"
                                name="nome"
                                type="text"
                                placeholder="Descrição Turma"
                                onChange={onChange}
                            />
                        </InputGroup>
                    </form>
                    <Button className="btn btn-primary float-right" onClick={onSubmit}>
                        <b>Cadastrar Turma</b>
                    </Button>
                </Card.Body>
            </Card>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
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

export default CardCadastroTurma;