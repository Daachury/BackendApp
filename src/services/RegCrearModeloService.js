import httpClient from "../http-common";

const createModelo = data => {    
    return httpClient.post("/addModelo",data);
};

const getModelos = () => {
    return httpClient.get("/allModelo");
};

const getModeloID = id => {
    return httpClient.get(`/allModelo/${id}`);
};

const removeModeloID = id => {
    return httpClient.delete(`/allModelo/${id}`);
};


export default {createModelo, getModelos, getModeloID, removeModeloID};