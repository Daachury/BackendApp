import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RegVehiculoService from "../services/RegVehiculoService";

const VehicuEdit = () => {
    const {id} = useParams();
    const[vehiculoID, setvehiculoID] = useState([]);

    useEffect( () => {
        RegVehiculoService.getVehiculoID(id)
        .then(result =>{
            setvehiculoID(result.data);  
            console.log(result);
        })
        .catch(error => {
            console.log('Aveces Falla',error);
        })
    },[]);
    return (
        <div className="note-details main-content">
            <article>
                <h5 className="text-capitalize primary-color">{vehiculoID.idVehiculo}</h5>
                <div className="mb-3 font-italic metadata">
                    <span>{vehiculoID.marca}</span>
                    <span className="text-capitalize">{vehiculoID.referencia}</span>
                    <span className="text-capitalize">{vehiculoID.nuevo}</span>
                    <span className="text-capitalize">{vehiculoID.kilometraje}</span>
                </div>
            </article>
        </div>
    );
}
export default VehicuEdit;