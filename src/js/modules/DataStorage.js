export default class DataStorage{
  constructor(){

  }

  set(data){
    localStorage.setItem ('fly',JSON.stringify(data))

  }
  getCards(){
    //  return localStorage.getItem('fly');
     return JSON.parse(localStorage.getItem('fly'));
  }
 

  clearStorage(){
    localStorage.clear();
  }


}
