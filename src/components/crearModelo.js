import { useState } from "react";
import { useHistory } from "react-router";
import RegCrearModeloService from "../services/RegCrearModeloService";

const RegistroModelo = () => {

    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [tipo, setTipo] = useState('');
    const [estado, setEstado] = useState('');

    const history = useHistory();

    const saveRegistro = (e) => {
        e.preventDefault();
        const addvehiculo = { modelo, marca, tipo, estado }

        RegCrearModeloService.createModelo(addvehiculo)
            .then(response => {
                console.log("Registro Exitoso", response.data);
                history.push("/allModelo");
            })
            .catch(error => {
                console.log("data", addvehiculo);
                console.log('Error Service Add User', error);
            })
    }

    return (
        <div className="createUser main-content">
            <h4>Registro Modelo</h4>
            <div className="notes-list mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="category">
                            Modelo: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Marca: <sup>*</sup>
                        </label>
                        <select id="category" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)}>
                            <option value="--Seleccione una marca--" disabled='true'>--Seleccione una marca--</option>
                            <option value="Auteco">Auteco</option>
                            <option value="Benelli">Benelli</option>
                            <option value="Ducati">Ducati</option>
                            <option value="Ktm">Honda</option>
                            <option value="Ktm">Ktm</option>
                            <option value="Tvs">Tvs</option>
                            <option value="Yamaha">Yamaha</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Tipo: <sup>*</sup>
                        </label>
                        <select id="category" className="form-control" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="--Seleccione un Tipo--" disabled='true'>--Seleccione un Tipo--</option>
                            <option value="AVENTURA">AVENTURA</option>
                            <option value="CUATRIMOTO">CUATRIMOTO</option>
                            <option value="DEPORTIVAS">DEPORTIVAS</option>
                            <option value="DOBLEPROPOSITO">DOBLEPROPOSITO</option>
                            <option value="ENDURO Y MOTOCROSS">ENDURO Y MOTOCROSS</option>
                            <option value="SPORT">SPORT</option>
                            <option value="SCOOTER Y SEMIAUTOMATICA">SCOOTER Y SEMIAUTOMATICA</option>
                            <option value="SUPER DEPORTIVAS"> SUPER DEPORTIVAS</option>
                            <option value="TOURING"> TOURING</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Estado: <sup>*</sup>
                        </label>
                        <select id="category" className="form-control" value={estado} onChange={(e) => setEstado(e.target.value)}>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
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

export default RegistroModelo;
