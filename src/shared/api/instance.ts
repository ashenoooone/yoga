import axios from "axios";

export const $api = axios.create({
  baseURL: "http://88.99.95.213:8000/",
});

export const $adminApi = axios.create({
  baseURL: "http://88.99.95.213:8001",
});
