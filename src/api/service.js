import axios from "axios";

export const api = axios.create({
  baseURL: "https://graph.tractive.com/3/bmi-calculation/calculate",
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    authorization: "Tractive fphpmh8cgsdbue3ewpggejhm",
    "content-type": "application/json",
    "x-tractive-client": "59bf7ff91d733cd9f7e8aa51",
  },
});
