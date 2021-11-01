import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import RegVehiculoService from "../services/RegVehiculoService";

const VehicuEdit = () => {
    const {id} = useParams();
    const[vehiculoID, setvehiculoID] = useState([]);
    const history = useHistory();

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


    const deleteVehiculo = () => {
        RegVehiculoService.removeVehiculoID(id)
            .then( response => {
                history.push("/");
            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }

    return (
        <div className="note-details main-content">
            <h1>Vehiculos Detail</h1>
            <article>
                <h5 className="text-capitalize primary-color">{vehiculoID.idVehiculo}</h5>
                <div className="mb-3 font-italic metadata">
                    <span>{vehiculoID.marca}</span>
                    <span className="text-capitalize">{vehiculoID.referencia}</span>
                    <span className="text-capitalize">{vehiculoID.nuevo}</span>
                    <span className="text-capitalize">{vehiculoID.kilometraje}</span>
                </div>
            </article>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <button className="btn-lg" onClick={deleteVehiculo}>Delete</button>           
        </div>
    );
}
export default VehicuEdit;