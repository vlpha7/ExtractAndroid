import request from 'superagent';

const url = ""

function handleAPIError(err) {
  console.log(err);
}

export function getSearchByApiName(apiName) {
  return request.post(`${url}/api/search/searchApi`)
    .type('form')
    .send({ apiName })
    .then(res => console.log(res))
    .catch(handleAPIError);
}