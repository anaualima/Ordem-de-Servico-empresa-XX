const axios = require('axios');

const fetchAPI = async (method, url, data = {}, headers = {}) => {
  const apiResponse = await axios({
    method,
    url,
    data,
    headers,
  }).catch(({ response }) => ({ ...response }));
  return apiResponse.data;
};

module.exports = fetchAPI;