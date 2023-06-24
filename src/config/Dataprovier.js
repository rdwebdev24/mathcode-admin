import { fetchUtils } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = "https://mathcode.onrender.com";

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
     var data = [];
      json.map((item)=>{
      var idValue = item["_id"];
      item["id"] = idValue;
      delete item["_id"];
      data.push(item)
     })
      return {
        data: data,
        total: data.length,
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

    getOne: async (resource, params) => {
      return httpClient(`${apiUrl}/${resource}/${params.id}`).then(
        ({ json }) => {
         json.id = json._id
         delete json._id;
         return {
          data:json
         }
        }
      );
    },
};
