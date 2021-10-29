import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/alluser");
};

export default { getAll };
