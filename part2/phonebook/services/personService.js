import axios from "axios";
const baseUrl = "/api/people";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, deletePerson };
