import httpClient from "../http-common";

const createUser = data => {
  return httpClient.post("/newuser",data);
};

export default { createUser };
