import httpClient from "../http-common";

const createVehiculo = data => {
    return httpClient.post("/addVehiculo",data);
};

const getVehiculos = () => {
    return httpClient.get("/allVehiculo");
};

const getVehiculoID = id => {
    return httpClient.get(`/allVehiculo/${id}`);
};
export default {createVehiculo, getVehiculos, getVehiculoID};