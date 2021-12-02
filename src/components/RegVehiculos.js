import { useState } from "react";
import { useHistory } from "react-router";
import RegVehiculoService from "../services/RegVehiculoService";

const RegistroUsuario = () => {

  const [nombre, setNombre] = useState('');   
  const [nuevo, setestado] = useState('');
  const [kilometraje, setkilometraje] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [idModelo, setIdModelo] = useState('');

  const history = useHistory();

  const saveRegistro = (e) => {
    e.preventDefault();
    const addvehiculo = { nombre, nuevo, kilometraje, idUsuario, idModelo }

    RegVehiculoService.createVehiculo(addvehiculo)
      .then(response => {
        console.log("Registro Exitoso", response.data);
        history.push("/allVehiculos");
      })
      .catch(error => {
        console.log("data", addvehiculo);
        console.log('Error Service Add User', error);
      })
  }

  return (
    <div className="createUser main-content">
      <h4>Registro Vehiculos</h4>
      <div className="notes-list mt-4">
        <form>

          <div className="form-group">
            <label htmlFor="category">
              Nombre: <sup>*</sup>
            </label>
            <select id="category" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}>
              <option value="KTM duke 200">KTM duke 200</option>
              <option value="Yamaha MT 03">Yamaha MT 03</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">
              Kilometraje: <sup>*</sup>
            </label>
            <input type="int" className="form-control" id="title" value={kilometraje} onChange={(e) => setkilometraje(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Estado: <sup>*</sup>
            </label>
            <select id="category" className="form-control" value={nuevo} onChange={(e) => setestado(e.target.value)}>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
            </select>
          </div>        

          <div className="form-group">
            <label htmlFor="title">
              idModelo: <sup>*</sup>
            </label>
            <input type="int" className="form-control" id="title" value={idModelo} onChange={(e) => setIdModelo(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="title">
              idUsuairo: <sup>*</sup>
            </label>
            <input type="int" className="form-control" id="title" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} />
          </div>

          
          <div className="text-center">
            <button className="btn-lg" onClick={(e) => saveRegistro(e)}>Registrar</button>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <button className="btn-lg btn-secondary" >Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
