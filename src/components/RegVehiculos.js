import { useState } from "react";
import { useHistory } from "react-router";
import RegVehiculoService from "../services/RegVehiculoService";

const RegistroUsuario = () => {

    const [marca, setMarca] = useState('');
    const [referencia, setreferencia] = useState('');
    const [nuevo, setestado] = useState('');
    const [kilometraje, setkilometraje] = useState('');
  
   const history = useHistory();

    const saveRegistro = (e) => {
        e.preventDefault();
        const addvehiculo = {marca,referencia,nuevo,kilometraje}

        RegVehiculoService.createVehiculo(addvehiculo)
            .then( response => {
              console.log("Registro Exitoso",response.data);
              history.push("/allVehiculos");
            })
            .catch(error => {
              console.log("data",addvehiculo);
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
              Marca Vehiculo: <sup>*</sup>
            </label>
           <select id="category" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value) }>
               <option value="Tipo">Marca</option>
               <option value="Yamaha">Yamaha</option>
               <option value="Auteco">Auteco</option>
               <option value="Tvs">Tvs</option>
               <option value="Benelli">Benelli</option>
               <option value="Ducati">Ducati</option>
               <option value="Ktm">Ktm</option>
           </select>
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Referencia: <sup>*</sup>
            </label>
           <select id="category" className="form-control" value={referencia} onChange={(e) => setreferencia(e.target.value) }>
               <option value="KTM duke 200">KTM duke 200</option>
               <option value="Yamaha MT 03">Yamaha MT 03</option>
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              Estado: <sup>*</sup>
            </label>
           <select id="category" className="form-control" value={nuevo} onChange={(e) => setestado(e.target.value) }>
               <option value="Nuevo">Nuevo</option>
               <option value="Usado">Usado</option>
           </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="title">
              Kilimetraje: <sup>*</sup>
            </label>
            <input type="int" className="form-control" id="title" value={kilometraje} onChange={(e) => setkilometraje(e.target.value) } />
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
