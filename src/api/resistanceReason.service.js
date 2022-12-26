import { buildResistanceReasonUrl } from "./urlBuilder/api-url-helper";

export const resistanceReasonService = {
  getResistanceReasons,
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function getResistanceReasons() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };

  return await fetch(buildResistanceReasonUrl(), requestOptions)
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
