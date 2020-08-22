import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PagesHome from "./Home/Home";
import PagesAluno from "./Aluno/Aluno";
import PagesTurma from "./Turma/Turma";
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as //Router,
    Switch,
    Route,
    //Link
} from "react-router-dom";

const Root = () => {
    return (
        <Container fluid>
            <Header />
            <Switch>
                <Route exact path="/" component={PagesHome} />
                <Route path="/aluno" component={PagesAluno} />
                <Route path="/turma" component={PagesTurma} />
            </Switch>
            <Footer />

        </Container>
    );
};

export default Root;