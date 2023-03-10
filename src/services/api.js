import axios from "axios";

const url = process.env.REACT_APP_API_URL;

function config(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getPosts(token) {
  const promise = axios.get(`${url}/timeline`, config(token));
  return promise;
}

function postPublish(body, token) {
  const promise = axios.post(`${url}/timeline`, body, config(token));
  return promise;
}

const api = {
  getPosts,
  postPublish,
};

export default api;