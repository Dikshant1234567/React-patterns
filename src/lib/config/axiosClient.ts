import axios from "axios";
import { envConfig } from "./env";
import qs from "qs"

export const axiosClient = axios.create({
  baseURL: envConfig.jobUrl,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
});
