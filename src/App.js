import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route , Switch } from "react-router-dom";
//import Login from "./components/Login.js";
import NotFound from "./components/NotFound.js";
import NavBar from "./components/Navbar";
import RegistroUsuario from "./components/RegistroUsuario";
import RegVehiculos from "./components/RegVehiculos";
import ListaVehiculos from "./components/ListaVehiculos";
import VehicuEdit from "./components/VehiculoEditar";
import LoginCom from "./components/LoginCompt";

function App() {
  return (
    <BrowserRouter>
      <div>
     
        <div>
          <Switch>
          
            <Route exact path="/" component={LoginCom} />
            <Route path="/menu" component={NavBar} />
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
