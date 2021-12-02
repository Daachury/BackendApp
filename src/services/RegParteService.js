import httpClient from "../http-common";

const createParteVehiculo = data => {    
    return httpClient.post("/addParteVehiculo",data);
};

const getPartesVehiculos = () => {
    return httpClient.get("/allPartesVehiculo");
};

const getParteVehiculoID = id => {
    return httpClient.get(`/allPartesVehiculo/${id}`);
};

const removeParteVehiculoID = id => {
    return httpClient.delete(`/allPartesVehiculo/${id}`);
};


export default {createParteVehiculo, getPartesVehiculos, getParteVehiculoID, removeParteVehiculoID};