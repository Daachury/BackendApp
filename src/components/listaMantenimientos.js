import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RegCrearMantenimiento from "../services/RegCrearMantenimiento";

const ListModelos = () => {

    const [mantenimientos, setMantenimiento] = useState([]);

    useEffect(() => {
        RegCrearMantenimiento.getMantenimientos()
            .then((result) => {
                console.log("Respuesta", result);
                setMantenimiento(result.data);
            })
            .catch((err) => {
                console.log("Error", err);
            });
    }, []);

    return (
        <div class="main-content">
            <h4>Lista de Mantenimientos</h4>
            <div className="notes-list mt-4">
                {mantenimientos.length > 0 ? mantenimientos.map((mantenimiento) => (
                    <div key={mantenimientos.idmantenimientos} className="notes-preview mt-3 border border-secondary">
                        <Link to={`/allVehiculo/${mantenimiento.idmantenimientos}`}>
                            <h5 className="primary-color text-capitalize">
                                {mantenimiento.idComponente}
                            </h5>
                            <h5 className="primary-color text-capitalize">
                                {mantenimiento.nombre}
                            </h5>
                            <p>{mantenimiento.kilometraje}</p>
                        </Link>
                    </div>
                )) : <div><h4>Modelo No encontrado</h4> </div>
                }
            </div>
        </div>

    );
};

export default ListModelos;
