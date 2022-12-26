import { buildQueryUrl } from "./urlBuilder/api-url-helper";

export const paramService = {
  getEmployeeCounts,
  getEmploymentTypes,
  getGenders,
  getProtestoEmployeeCounts,
  getInterventionTypes,
  getTradeUnionAuthorities,
  getTradeUnions,
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function getEmployeeCounts() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("employeeCounts"), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}
function getEmploymentTypes() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("employmentTypes "), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}
function getGenders() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("genders "), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}
function getProtestoEmployeeCounts() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("protestoEmployeeCounts"), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}
function getInterventionTypes() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("interventionTypes"), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}
function getTradeUnionAuthorities() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("tradeUnionAuthorities"), requestOptions)
    .then(handleResponse)
    .then(responseToJson);
}
function getTradeUnions() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  return fetch(buildQueryUrl("tradeUnions"), requestOptions)
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
