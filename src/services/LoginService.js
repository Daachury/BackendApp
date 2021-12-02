import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/alluser");
};

const inicioSesion = () => {
  return httpClient.get("/inicioSesion");
};

export default { getAll, inicioSesion };
