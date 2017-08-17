import Config from './config';
import nx from 'next-js-core2';
import 'next-param';


export default class {
  static post(inName, inData) {
    //TODO: abstract next-showapi module
    const data = Object.assign({
      showapi_appid: '44181',
      showapi_sign: '9a0d1bf2bbe845bca4fa811c8579148f'
    }, inData);

    const options = {
      method: 'POST',
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: nx.param(data)
    };

    return new Promise((resolve, reject) => {
      fetch(`${Config.API_SERVER}${inName}`, options)
        .then(res => res.json())
        .then(function (res) {
          if (!res.showapi_res_error) {
            resolve(res.showapi_res_body);
          } else {
            reject(res);
          }
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}