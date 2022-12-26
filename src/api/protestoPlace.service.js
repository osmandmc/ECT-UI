import { buildProtestoPlaceUrl } from "./urlBuilder/api-url-helper";

export const protestoPlaceService = {
  getProtestoPlaces,
};

const headers = {
  "Content-Place": "application/json",
  Accept: "application/json",
};

function getProtestoPlaces() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildProtestoPlaceUrl(), requestOptions)
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
