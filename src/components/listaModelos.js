import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import RegCrearModeloService from "../services/RegCrearModeloService";

const ListModelosM = () => {

    const [modelos, setModelo] = useState([]);

    useEffect(() => {
        RegCrearModeloService.getModelos()
            .then((result) => {
                console.log("Respuesta", result);
                setModelo(result.data);
            })
            .catch((err) => {
                console.log("Error", err);
            });
    }, []);

    return (
        <div class="main-content">
            <h4>Lista Modelos</h4>
            <div className="notes-list mt-4">
                {modelos.length > 0 ? modelos.map((modelo) => (
                    <div key={modelos.idVehiculo} className="notes-preview mt-3 border border-secondary">
                        <Link to={`/allVehiculo/${modelo.idVehiculo}`}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h5 className="primary-color text-capitalize">
                                            {modelo.modelo}
                                        </h5>
                                        <p>{modelo.marca}</p>
                                        <p>{modelo.tipo}</p>
                                        <p>{modelo.estado}</p></Col>
                                    <Col>
                                        <Image src={modelo.urlImagen} fluid />
                                    </Col>
                                </Row>
                            </Container>
                        </Link>
                    </div>
                )) : <div><h4>Modelo No encontrado</h4> </div>
                }
            </div>
        </div>

    );
};

export default ListModelosM;
