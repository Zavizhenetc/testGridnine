export default class Api {
  constructor(url) {
    this.url = url
  }

  getRes() {
    console.log(this.url);
    return fetch(this.url, {
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