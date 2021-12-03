import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import NotFound from "./components/NotFound.js";
import NavBar from "./components/Navbar";
import RegistroUsuario from "./components/RegistroUsuario";
import RegVehiculos from "./components/RegVehiculos";
import ListaVehiculos from "./components/ListaVehiculos";
import VehicuEdit from "./components/VehiculoEditar";
import RegistroModelo from "./components/crearMantenimiento";
import Listmantenimientoss from "./components/listaMantenimientos";
import RegistroModeloM from "./components/crearModelo";
import RegistroParte from "./components/crearParte";
import ListUsuario from "./components/listaUsuarios";

function Home() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <div>
        <Switch>
        
          <Route path="/adduser" component={RegistroUsuario} />
          <Route path="/addvehiculo" component={RegVehiculos} />
          <Route path="/allVehiculos" component={ListaVehiculos} />
          <Route path="/addMantenimiento" component={RegistroModelo}/>
          <Route path="/allMantenimiento" component={Listmantenimientoss} />
          <Route path="/addModelo" component={RegistroModeloM} />
          <Route path="/addParteVehiculo" component={RegistroParte} />
          <Route path="/allUser" component={ListUsuario} />
        
          
          <Route path="/allVehiculo/:id" component={VehicuEdit} />
          <Route path="*" component={NotFound} />
          
        </Switch>
      </div>
      
    </div>
  </BrowserRouter>
  );
}

export default Home;