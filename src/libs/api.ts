import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com/";

export type Params = {
  method: "get" | "post" | "put" | "delete" | "patch";
  url: string;
  params?: {
    [key: string]: string | number | boolean | string[] | number[] | boolean[];
  };
  headers?: { [key: string]: string };
  body?: FormData | object;
};

const apiInstance = async ({ method, url, params, headers, body }: Params) => {
  return axios({
    method,
    baseURL,
    url,
    params,
    headers: {
      Accept: "application/json",
      ...headers,
      // Authorization: `Bearer ...`,
      ...(body &&
        body instanceof FormData && {
          "Content-Type": "multipart/form-data",
        }),
    },
    data: body,
  })
    .then((response) => ({
      data: response.data,
    }))
    .catch((error) => {
      // You can add custom error handling here.
      return Promise.reject({
        message: error.message || "An unknown error occurred",
      });
    });
};

export default apiInstance;
