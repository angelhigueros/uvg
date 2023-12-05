const BASE_URL = ''

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8000',
    'Access-Control-Allow-Credentials': 'true',
  }
  options.credentials = 'include'
  const url = BASE_URL + endpoint
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
  

const api = {
  juegos: {
    insert(params) {
      return callApi(`/neo/new`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
    search(params) {
      return callApi(`/neo/search`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  },
};

export default api;
