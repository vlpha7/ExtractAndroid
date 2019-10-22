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

export function uploadApkJson(formData) {
  return request.post(`${backendServer}/api/apkFileUpload`)
    //.set('Content-Type', 'multipart/form-data')  
    // .timeout({
    //   response: 500000000,  // Wait 5 seconds for the server to start sending,
    //   deadline: 600000000, // but allow 1 minute for the file to finish loading.
    // })
    .send(formData);
}

export function uploadApkToComp(formData) {
  return request.post(`${backendServer}/api/apkFileComp`)
    .send(formData);
}