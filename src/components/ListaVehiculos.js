import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RegVehiculoService from "../services/RegVehiculoService";

const ListVehiculos = () => {
  
  const [vehiculos,setvehiculo] = useState([]);

  useEffect(() => {
    RegVehiculoService.getVehiculos()
      .then((result) => {
        console.log("Respuesta", result);
        setvehiculo(result.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div class="main-content">
          <h4>Vehiculos</h4>  
          <div className="notes-list mt-4">
            {vehiculos.length > 0 ? vehiculos.map((vehiculo) => (
                <div key={vehiculo.idVehiculo} className="notes-preview mt-3 border border-secondary">
                  <Link to={`/allVehiculo/${vehiculo.idVehiculo}`}>
                    <h5 className="primary-color text-capitalize">
                      {vehiculo.marca}
                    </h5>
                    <h5 className="primary-color text-capitalize">
                      {vehiculo.referencia}
                    </h5>
                    <p>{vehiculo.nuevo}</p>
                    <p>{vehiculo.kilometraje}</p>
                  </Link>
                </div>
              )) : <div><h4>Vehiculo No encontrado</h4> </div>
            }
          </div>
        </div>
      
  );
};

export default ListVehiculos;
