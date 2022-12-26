import { buildCityUrl } from "./urlBuilder/api-url-helper";

export const cityService = {
  getCities,
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function getCities() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  console.log("get cities");
  return fetch(buildCityUrl(), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}

export function handleResponse(response) {
  if (!response.ok) {
    // auto logout if 401 response returned from api
    return responseToJson(response).then((json) => Promise.reject(json));
  }

  return response;
}
export function responseToJson(response) {
  return response.json();
}
