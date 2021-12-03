import React, { Component, useState } from 'react';
import Login from '../Login.css';
import LoginService from '../services/LoginService';
import axios from 'axios';

import Cookies from 'universal-cookie';

const url = "http://localhost:8090/api/inicioSesion/";
const cookies = new Cookies();

class LoginCom extends Component {

    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    inicioSesion = async () => {

        await LoginService.inicioSesion(`${this.state.form.username}`,{ params: { username: this.state.form.username, password: this.state.form.password } })
         .then(response => {
                console.log("x2" + response.data);
                return response.data;
            })
            .then(response => {
                if (response != '') {
                    console.log(response);
                    var respuesta = response;               
                    cookies.set('username', respuesta.username, { path: "/" });
                    alert(`Bienvenido ${respuesta.nombre}`);
                    window.location.href = "./menu";
                } else {
                    alert('User password son incorrectos');
                }
            })
            .catch(error => {
                console.log(error);
            })

    }


    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.inicioSesion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginCom;