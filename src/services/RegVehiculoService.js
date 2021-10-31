import httpClient from "../http-common";

const createVehiculo = data => {
    return httpClient.post("/addVehiculo",data);
};

const getVehiculos = data => {
    return httpClient.get("/allVehiculo");
};
export default {createVehiculo,getVehiculos};