import { useState } from "react";
import { useHistory } from "react-router";
import RegUserService from "../services/RegUserService";
import NavBar from "./Navbar";


const RegistroUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setapellid] = useState('');
    const [telefono, settelefono] = useState('');
    const [numeroDocumento, setNumdocumento] = useState('');
    const [tipodocumento, setTipodocumento] = useState('');
    const [correo, setcorreo] = useState('');
    const [password, setpassword] = useState('');

    const history = useHistory();

    const saveRegistro = (e) => {
        e.preventDefault();
        const adduser = {nombre,apellido,telefono,numeroDocumento,tipodocumento,correo,password};

        RegUserService.createUser(adduser)
            .then( response => {
              console.log("Registro Exitoso",response.data);
              history.push("/Login");
            })
            .catch(error => {
              console.log("data",adduser);
              console.log('Error Service Add User', error);
            })
    }


  return (
    <div className="createUser main-content">
      <h4>Registro Usuarios</h4>
      <div className="notes-list mt-4">
        <form>
          <div className="form-group" >
            <label htmlFor="title">
              Nombre: <sup>*</sup>
            </label>
            <input type="text" className="form-control" id="title" value={nombre} onChange={(e) => setNombre(e.target.value) } />
          </div>
          <div className="form-group">
            <label htmlFor="title">
              Apellido: <sup>*</sup>
            </label>
            <input type="text" className="form-control" id="title" value={apellido} onChange={(e) => setapellid(e.target.value) }/>
          </div>
          <div className="form-group">
            <label htmlFor="title">
              Telefono: <sup>*</sup>
            </label>
            <input type="number" className="form-control" id="title" value={telefono} onChange={(e) => settelefono(e.target.value) }/>
          </div>
          <div className="form-group">
            <label htmlFor="title">
              Numero Documento: <sup>*</sup>
            </label>
            <input type="number" className="form-control" id="title" value={numeroDocumento} onChange={(e) => setNumdocumento(e.target.value) }/>
          </div>
          
          <div className="form-group">
            <label htmlFor="category">
              Tipo de Documento: <sup>*</sup>
            </label>
           <select id="category" className="form-control" value={tipodocumento} onChange={(e) => setTipodocumento(e.target.value) }>
               <option value="Tipo">Tipo Documento</option>
               <option value="CEDULACIUDADANIA">CEDULA CIUDADANIA</option>
               <option value="CEDULAEXTRANJERIA">CEDULA EXTRANJERIA</option>
               <option value="PASAPORTE">PASAPORTE</option>
               <option value="TARJETA">TARJETA DE IDENTIDAD</option>
           </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="title">
              Correo: <sup>*</sup>
            </label>
            <input type="text" className="form-control" id="title" value={correo} onChange={(e) => setcorreo(e.target.value) } />
          </div>
          
          <div className="form-group">
            <label htmlFor="title">
              Password: <sup>*</sup>
            </label>
            <input type="password" className="form-control" id="title" value={password} onChange={(e) => setpassword(e.target.value) } />
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
