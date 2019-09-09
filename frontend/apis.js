import request from 'superagent';
import _ from 'lodash';
import { permissions, apis, apks } from './config';

const url = ""

function handleAPIError(err) {
  console.log(err);
}

export function getSearchByApiName(input) {
  apks.sort(() => Math.floor(Math.random() * Math.floor(2)) ? -1 : 1);
  return {
    detail: {
      type: _.indexOf(permissions, input) === -1 ? "API" : "Permission",
      data: _.indexOf(permissions, input) === -1 ? _.find(apis, (o) => o.name === input) : _.find(permissions, (o) => o === input),
    },
    apks: apks 
  }
  // return request.post(`${url}/api/search/searchApi`)
  //   .type('form')
  //   .send({ apiName })
  //   .then(res => console.log(res))
  //   .catch(handleAPIError);
}