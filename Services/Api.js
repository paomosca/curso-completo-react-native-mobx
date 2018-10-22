import apisauce from "apisauce";

let instance = null;

const create = (baseURL = "http://localhost:3000/") => {
  if (instance !== null) {
    return instance;
  }
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
      Accept: "application/json; version=0",
      "Content-Type": "application/json"
    },
    timeout: 15000
  });

  api.getCategories = () => {
    return api.get("/categories");
  };
  instance = api;

  return instance;
};

export default {
  create
};
