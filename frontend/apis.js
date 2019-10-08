import request from 'superagent';
import _ from 'lodash';
import { permissions, apis, apks, backendServer } from './config';

const url = ""

function handleAPIError(err) {
  console.log(err);
}

export async function getSearchByApiName(input) {
  try {
    const res = await request.post(`${backendServer}/api/search/byKeyword`)
      .send({ keyword: input });
    return {
      detail: {
        type: true ? "API" : "Permission",
        data: true ? apis[0] : permissions[0],
      },
      apks: res.body 
    };
  } catch(err) {
    handleAPIError(err);
  }
}