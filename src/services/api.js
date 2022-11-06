import axios from "axios";

const headers = () => {
  const headers = {
    headers: {
      "content-Types": "aplication/json",
    },
  };
  return headers;
};

export const BASE_URL = "https://pokeapi.co/api/v2";
export const IMG_URL =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

const errorMessage = {
  message: "Error en el servidor",
  name: "serverError",
  statusCode: 500,
};

const POST = async (url, payload) => {
  try {
    const response = await axios.post(url, payload, headers());
    return (response && response.data) || null;
  } catch (error) {
    throw (error && error.response.data.error) || errorMessage;
  }
};

const GET = async (url) => {
  try {
    const response = await axios.get(url, headers());
    return (response && response.data) || null;
  } catch (error) {
    throw (error && error.response.data.error) || errorMessage;
  }
};

const PATCH = async (url, payload) => {
  let res = null;
  try {
    res = await axios.post(url, payload, headers());
    return (res && res.data) || null;
  } catch (error) {
    throw (error && error.response.data.error) || errorMessage;
  }
};

const DELETE = async (url, payload) => {
  let res = null;
  try {
    res = await axios.post(url, payload, headers());
    return (res && res.data) || null;
  } catch (error) {
    throw (error && error.response.data.error) || errorMessage;
  }
};

const api = { POST, GET, PATCH, DELETE, pokemons: `${BASE_URL}/pokemon` };

export default api;
