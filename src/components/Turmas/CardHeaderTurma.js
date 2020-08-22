import React from 'react';
import { Link } from 'react-router-dom';

const CardHeaderTurma = () => (
    <>
        <div className="card bg-light text-dark mb-1" style={{ border: "1px solid #e9ecef", width: "100%" }}>
            <div className="card-body" style={{ backgroundColor: "#e9ecef", border: "0px solid" }}>
                <h1><b>/ Turmas</b></h1>
            </div>
        </div>

        <div className="card bg-light text-dark mb-4" style={{ border: "1px solid #f8f9fa", width: "100%" }}>
            <div className="card-body p-0">
                <p><Link to="/">Home /</Link> Turmas</p>
            </div>
        </div>
    </>
);

export default CardHeaderTurma;