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
                      Dueño: Camilo Gomez
                    </h5>
                    <h5 className="primary-color text-capitalize">
                      Marca: {vehiculo.nombre}
                    </h5>
                    <h5 className="primary-color text-capitalize">
                     Kilometraje: {vehiculo.kilometraje} km
                    </h5>
                    <p>{vehiculo.nuevo}</p>
                  </Link>
                </div>
              )) : <div><h4>Vehiculo No encontrado</h4> </div>  
            }
          </div>
        </div>
      
  );
};

export default ListVehiculos;
