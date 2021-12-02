import httpClient from "../http-common";

const createUser = data => {
  return httpClient.post("/newuser",data);
};

const getUser = () => {
  return httpClient.get("/allUser");
};

export default { createUser, getUser };
