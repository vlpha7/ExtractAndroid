import request from 'superagent';
import _ from 'lodash';
import { permissions, apis, apks, backendServer } from './config';

const url = ""

function handleAPIError(err) {
  console.log(err);
}

export async function getSearchByApiName(input, pageIdx) {
  try {
    const res = await request.post(`${backendServer}/api/search/byKeyword`)
      .send({ keyword: input, pageIdx });
    return res.body;
  } catch(err) {
    handleAPIError(err);
  }
}

export function getGraphState() {
  return request.get(`${backendServer}/api/graphState`);
}

export function getAllSuggestion() {
  return request.get(`${backendServer}/api/allSuggestion`)
}