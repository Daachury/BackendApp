import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import RegCrearParteService from "../services/RegCrearParteService";

const ListPartes = () => {

  const [partes, setParte] = useState([]);

  useEffect(() => {
    RegCrearParteService.getPartesVehiculo()
      .then((result) => {
        console.log("Respuesta", result);
        setParte(result.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div class="main-content">
      <h4>Partes</h4>
      <div className="notes-list mt-4">
        {partes.length > 0 ? partes.map((partes) => (
          <div key={partes.idPartesVehiculo} className="notes-preview mt-3 border border-secondary">
            <Link to={`/allPartesVehiculo/${partes.idPartesVehiculo}`}>
              <Container>
                <Row>
                  <Col>
                    <h5 className="primary-color text-capitalize">
                      Vida Útil{partes.vidaUtil}
                    </h5>
                    <p> Reutilizable {partes.reutilizable}</p>
                    <p> Modelo {partes.idModelo}</p>
                  </Col>
                  <Col>
                    <Image src={partes.urlImagen} fluid />
                  </Col>
                </Row>
              </Container>
            </Link>
          </div>
        )) : <div><h4>Parte No encontrado</h4> </div>
        }
      </div>
    </div>
  );
};

export default ListPartes;
