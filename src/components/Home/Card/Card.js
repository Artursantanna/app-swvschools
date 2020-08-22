import React, { useState } from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';


const HomeCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Jumbotron className="mb-4">
                <h1 className="display-3"><b>Olá,</b></h1>
                <h4>
                    Este sistema foi desenvolvido para facilitar parte da administração de sua escola e estamos felizes em ter você aqui!
                </h4>
                <Button onClick={handleShow}>
                    <b>Saiba mais</b>
                </Button>
            </Jumbotron>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Seja Bem Vindo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Esse projeto foi realizado por Artur SantAnna.</p>
                    <p>Este é meu primeiro projeto utilizando React e REST API.</p>
                    <p>Espero poder fazer parte da equipe SWV Software, para que possa contribuir e aprender.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Ate Breve
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default HomeCard;