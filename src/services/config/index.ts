import axios from "axios";
import { toast } from "vue3-toastify";

const API_KEY = "841f21ef9e7cfd7c23c9d1e28a153733";
const API_LANGUAGE = "pt-BR";

const extractBaseUrl = () => {
  const urlObj = new URL("https://api.themoviedb.org/");
  return [
    urlObj.protocol,
    urlObj.hostname,
    `${urlObj.protocol}//${urlObj.hostname}`,
  ];
};

const urlBase = extractBaseUrl();
const baseURL = `${urlBase[2]}/3`;

const httpClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("tkn")}`,
  },
});

httpClient.interceptors.request.use(
    function (config) {
      if (config.params) {
        config.params['api_key'] = API_KEY;
        config.params['language'] = API_LANGUAGE;
      } else {
        config.params = { apiKey: API_LANGUAGE };
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.response.data.error);
    return Promise.reject(error);
  }
);

export default httpClient;
