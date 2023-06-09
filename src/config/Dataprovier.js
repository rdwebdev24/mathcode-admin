import { fetchUtils } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = "http://localhost:4000";

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider2 = simpleRestProvider(apiUrl, httpClient);

export const dataProvider = {
  ...dataProvider2,
  // get list 
  getList: (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ headers, json }) => {
     console.log(json," json...");
      return {
        data: json,
        total: json.length,
      };
    });
  },

  create: (resource, params) =>{
     return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    }))},
};