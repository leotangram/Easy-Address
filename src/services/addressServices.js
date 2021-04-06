import httpServices from "./httpsServices";
import { urls } from "../const/urls";

export const getInfoByPostal = async (country, postalCode) => {
  const url = urls.getInfoByPostalCode(country, postalCode);
  return httpServices.get(url);
};
