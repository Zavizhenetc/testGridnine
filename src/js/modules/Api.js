export default class Api {
  constructor() {
  }

  getRes() {
    return fetch('src/js/constans/flights.json', {
      method: "GET",
    }).then((res)=>  this._getResponseData(res));
  
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } 
      return Promise.reject(res.status);
    }
}