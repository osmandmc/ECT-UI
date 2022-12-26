import {
  buildResistanceUrl,
  buildResistanceProtestoUrl,
} from "./urlBuilder/api-url-helper";

export const resistanceService = {
  getResistances,
  getThis,
  getProtesto,
  createResistance,
  updateResistance,
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function getResistances() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };

  return fetch(buildResistanceUrl(), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}

function getThis(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };

  return fetch(buildResistanceUrl(id), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}

function createResistance(payload) {
  const requestOptions = {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({ resistance: payload }),
  };

  return fetch(buildResistanceUrl(), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}

function updateResistance(resistanceId, payload) {
  const requestOptions = {
    method: "PUT",
    headers: {
      ...headers,
    },
    body: JSON.stringify({ resistance: payload }),
  };

  return fetch(buildResistanceUrl(resistanceId), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}

function getProtesto(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };

  return fetch(buildResistanceProtestoUrl(id), requestOptions)
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
