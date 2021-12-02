import { useState } from "react";
import { useHistory } from "react-router";
//import Login from './components/Login';
import LoginService from "../services/LoginService";
//import { Link } from "react-router-dom";

const Iniciosesion = () => {
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');

  const history = useHistory();

  const saveRegistro = (e) => {
    e.preventDefault();
    const addvehiculo = { modelo, marca, tipo, estado }

    LoginService.createModelo(addvehiculo)
      .then(response => {
        console.log("Registro Exitoso", response.data);
        history.push("/allModelo");
      })
      .catch(error => {
        console.log("data", addvehiculo);
        console.log('Error Service Add User', error);
      })
  }
  //class Login extends Component {
  //render() {
  return (
    <div class="main-content" style={{ backgroundColor: "#fff" }}>
      <mdb-card>
        <mdb-card-header class="info-color white-text text-center py-4">
          <h5 style={{ backgroundColor: "#33b5e5" }}>
            <br />
            <strong style={{ color: "#ffffff" }}>Formulario de inicio de Sesión</strong>
            <br />
            <br />
          </h5>
        </mdb-card-header>

        <mdb-card-body class="px-lg-5 pt-0">
          <form class="text-center">
            <div className="form-group">
              <label htmlFor="category">
                Usuario <sup></sup>
              </label>
              <input type="text" className="form-control" id="title" placeholder="prueba123" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="category">
              Contraseña <sup></sup>
              </label>
              <input type="password" className="form-control" id="title" placeholder="*******"value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </div>

            <button mdbBtn color="info" outline="true" rounded="true" block="true" class="my-4 waves-effect z-depth-0" mdbWavesEffect style={{ backgroundColor: "#33b5e5", color: "#fff" }}
              type="submit">Iniciar Sesion
            </button>
          </form>
        </mdb-card-body>
      </mdb-card>
    </div>
  );
}


export default Iniciosesion;
