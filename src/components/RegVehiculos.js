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
              <option value="Benelli 310">Benelli 310</option>
              <option value="Yamaha R3">Yamaha R3</option>
              <option value="Yamaha Tracer">Yamaha Tracer</option>
              <option value="Yamaha R1m">Yamaha R1m</option>
              <option value="KTM duke ng 250">KTM duke ng 250</option>
              <option value="KTM duke ng 390">KTM duke ng 390</option>
              <option value="Ducati Panigale">Ducati Panigale</option>
              <option value="Pulsar 180">Pulsar 180</option>
              <option value="Suzuki gs 500">Suzuki gs 500</option>
              <option value="Suzuki gs xr 150">Suzuki gs xr 150</option>
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
              <option value="TRUE">Nuevo</option>
              <option value="FALSE">Segunda</option>
            </select>
          </div>        

          <div className="form-group">
            <label htmlFor="title">
              Modelo: <sup>*</sup>
            </label>
            <input type="int" className="form-control" id="title" value={idModelo} onChange={(e) => setIdModelo(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="title">
              Usuairo: <sup>*</sup>
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
