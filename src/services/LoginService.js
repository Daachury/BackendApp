import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/alluser");
};

const inicioSesion = id => {
  return httpClient.get(`/inicioSesion/${id}`);
};

export default { getAll, inicioSesion };
