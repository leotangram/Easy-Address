import axios from "axios";

const httpService = {
  all: axios.all,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
