import { buildCompanyUrl } from "./urlBuilder/api-url-helper";

export const companyService = {
  getCompanies,
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function getCompanies() {
  const requestOptions = {
    method: "GET",
    headers: {
      ...headers,
    },
  };
  console.log("get companies");
  return fetch(buildCompanyUrl(), requestOptions)
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
