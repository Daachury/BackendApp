import httpClient from "../http-common";

const createPartesVehiculo = data => {    
    return httpClient.post("/addParteVehiculo",data);
};

const getPartesVehiculo = () => {
    return httpClient.get("/allParteVehiculo");
};

const getPartesVehiculoID = id => {
    return httpClient.get(`/allParteVehiculo/${id}`);
};

const removePartesVehiculoID = id => {
    return httpClient.delete(`/allParteVehiculo/${id}`);
};


export default {createPartesVehiculo, getPartesVehiculo, getPartesVehiculoID, removePartesVehiculoID};