import { useState } from "react";
import { useHistory } from "react-router";
import RegCrearParteService from "../services/RegCrearParteService";

const RegistroParte = () => {

    const [vidaUtil, setVidaUtil] = useState('');
    const [nombre, setNombre] = useState('');
    const [reutilizable, setReutilizable] = useState('');
    const [urlImagen, setUrlImagen] = useState('');
    const [idModelo, setIdModelo] = useState('');
    
    const history = useHistory();

    const saveRegistro = (e) => {
        e.preventDefault();
        const addParteVehiculo = {vidaUtil, nombre, reutilizable, urlImagen, idModelo}

        RegCrearParteService.createPartesVehiculo(addParteVehiculo)
            .then(response => {
                console.log("Registro Exitoso", response.data);
                history.push("/allPartesVehiculo");
            })
            .catch(error => {
                console.log("data", addParteVehiculo);
                console.log('Error Service Add User', error);
            })
    }

    return (
        <div className="createUser main-content">
            <h4>Registro de Partes de Motocicleta</h4>
            <div className="notes-list mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="category">
                            Vida Util: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={vidaUtil} onChange={(e) => setVidaUtil(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Nombre: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Reutilizable: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={reutilizable} onChange={(e) => setReutilizable(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            Url Imagen Parte: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">
                            idModelo: <sup>*</sup>
                        </label>
                        <input type="int" className="form-control" id="title" value={idModelo} onChange={(e) => setIdModelo(e.target.value)} />
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

export default RegistroParte;