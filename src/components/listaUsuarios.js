import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RegUserService from "../services/RegUserService";

const ListUsuario = () => {

  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    RegUserService.getUser()
      .then((result) => {
        console.log("Respuesta", result);
        setUsuario(result.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div class="main-content">
      <h4>Lista de Usuarios</h4>
      <div className="notes-list mt-4">
        {usuarios.length > 0 ? usuarios.map((usuario) => (
          <div key={usuario.idUsuario} className="notes-preview mt-3 border border-secondary">
            <Link to={`/allVehiculo/${usuario.idUsuario}`}>
              <h5 className="primary-color text-capitalize">
                Nombre: {usuario.nombre}  {usuario.apellido}
              </h5>
              <p> Documento: {usuario.numeroDocumento}</p>
              <p>Telefono: {usuario.telefono}</p>
              <p>Correo: {usuario.correo}</p>            
            </Link>
          </div>
        )) : <div><h4>Vehiculo No encontrado</h4> </div>
        }
      </div>
    </div>
  );
};

export default ListUsuario;
