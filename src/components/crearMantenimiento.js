import { useState } from "react";
import { useHistory } from "react-router";
import RegCrearMantenimiento from "../services/RegCrearMantenimiento";

const RegistroModelo = () => {

    const [idComponente, setIdComponente] = useState('');
    const [nombre, setNombre] = useState('');
    const [kilometraje, setKilometraje] = useState('');
   
    const history = useHistory();

    const saveRegistro = (e) => {
        e.preventDefault();
        const addvehiculo = {idComponente, nombre, kilometraje}

        RegCrearMantenimiento.RegCrearMantenimiento(addvehiculo)
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
            <h4>Registro de Mantenimientos</h4>
            <div className="notes-list mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="category">
                            idComponente: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={idComponente} onChange={(e) => setIdComponente(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Nombre: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            kilometraje: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={kilometraje} onChange={(e) => setKilometraje(e.target.value)} />
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
