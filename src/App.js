import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Iniciosesion from "./components/Login.js";
import NotFound from "./components/NotFound.js";
import NavBar from "./components/Navbar";
import RegistroUsuario from "./components/RegistroUsuario";
import RegVehiculos from "./components/RegVehiculos";
import ListaVehiculos from "./components/ListaVehiculos";
import VehicuEdit from "./components/VehiculoEditar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/Login" component={Iniciosesion} />
            <Route path="/adduser" component={RegistroUsuario} />
            <Route path="/addvehiculo" component={RegVehiculos} />
            <Route path="/allVehiculos" component={ListaVehiculos} />
            <Route path="/allVehiculo/:id" component={VehicuEdit} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
