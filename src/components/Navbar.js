import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title">Motor APP</div>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            {" "}
            Search{" "}
          </button>
        </form>
        <Link to="/" className="ml-3">
          Cerrar Sesion
        </Link>
      </header>

      <div class="container-fluid">
        <div class="row1">
          <nav class="navbar flex-md-column flex-row align-items-start">
            <ul class="flex-md-column flex-row navbar-nav">
              <li class="nav-item">
                <Link to="/" className="ml-3 navbar__item">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/addvehiculo" className="ml-3 navbar__item">
                  Registro Vehiculos
                </Link>
              </li>
              
              <li class="nav-item">
                <Link to="/allVehiculos" className="ml-3 navbar__item">
                  Lista Vehiculos
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/addMantenimiento" className="ml-3 navbar__item">
                  Mantenimiento
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/allMantenimiento" className="ml-3 navbar__item">
                  Lista Mantenimientos
                </Link>
              </li>
              <hr/>
              <li class="nav-item">
                <Link to="/addModelo" className="ml-3 navbar__item">
                  Registro de modelo
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/allModelo" className="ml-3 navbar__item">
                  Lista Modelos Vehiculo
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/addParteVehiculo" className="ml-3 navbar__item">
                  Registro de partes
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/allParteVehiculo" className="ml-3 navbar__item">
                  Lista Partes Vehiculo
                </Link>
              </li>
              <hr/>
              <li class="nav-item">
                <Link to="/adduser" className="ml-3 navbar__item">
                  Registro Usuarios
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/allUser" className="ml-3 navbar__item">
                  Lista Usuarios
                </Link>
              </li>
              
              <hr/>
              <li class="nav-item">
                <Link to="/Login" className="ml-3 navbar__item">
                  Perfiles
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
