import httpClient from "../http-common";

const createMantenimiento= data => {    
    return httpClient.post("/addMantenimiento",data);
};

const getMantenimientos = () => {
    return httpClient.get("/allMantenimiento");
};

const getMantenimientoID = id => {
    return httpClient.get(`/allMantenimiento/${id}`);
};

const removeMantenimientoID = id => {
    return httpClient.delete(`/allMantenimiento/${id}`);
};


export default {createMantenimiento, getMantenimientos, getMantenimientoID, removeMantenimientoID};