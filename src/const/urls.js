export const urls = {
  getInfoByPostalCode: (country, postalCode) =>
    `${process.env.REACT_APP_BASE_URL}${country}/query/info_cp/${postalCode}?type=simplified&token=${process.env.REACT_APP_TOKEN_SEPOMEX}`,
};
