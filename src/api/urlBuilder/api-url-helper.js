import appConfig from "@/app.config";

const appHost = window.location.hostname;
const envConfig = appConfig.ceviz.hosts[appHost];
const apiRoot = `${envConfig.protocol}://${appHost}:${envConfig.port}/${appConfig.ceviz.apiNamespace}`;

function buildUrl(resource, path) {
  return path ? `${apiRoot}/${resource}/${path}` : `${apiRoot}/${resource}`;
}

export function buildResistanceUrl(path) {
  return path ? buildUrl("resistances", path) : buildUrl("resistances");
}
export function buildResistanceProtestoUrl(path) {
  return buildUrl("protestos", path);
}
export function buildCityUrl() {
  return buildUrl("cities");
}
export function buildCompanyUrl() {
  return buildUrl("companies");
}
export function buildResistanceReasonUrl() {
  return buildUrl("resistanceReasons");
}
export function buildCategoryUrl() {
  return buildUrl("categories");
}
export function buildProtestoTypeUrl() {
  return buildUrl("protestoTypes");
}
export function buildProtestoPlaceUrl() {
  return buildUrl("protestoPlaces");
}
export function buildCorporationUrl() {
  return buildUrl("corporations");
}
export function buildQueryUrl(path) {
  return `${apiRoot}/${path}`;
}
