function csl(elem){
  console.log(elem);
}


import './index.css';
import Api from './js/modules/Api';
import DataStorage from './js/modules/DataStorage';
import Card from './js/components/flyCard';
import CardList from './js/components/flyCardList';


const api = new Api();
const storage = new DataStorage();
const TEMPLATE = document.querySelector('.template').content
const cardList = document.querySelector('.container')
const flyCardsList = new CardList(cardList)

// записываем в сторедж данные с сервера 
api
    .getRes()
    .then((res) => {
      storage.set(res)
    })
    .catch((err) => {
      console.log(`Ошибка ${err} `);
    });


function getStorageCards(){
    const storageCards = storage.getCards();

    const filterCards = storageCards.result.flights.map(({ flight }) => flight);
    
    csl(filterCards);

    const flyCard = filterCards.map((data) => {
      return new Card(data, TEMPLATE).createCard();
    });
    const cardsSlice = flyCard.slice(0, 30);
    flyCardsList.render(cardsSlice);
 
  }


  
    getStorageCards();
    // csl (a);
    // csl(fa);
    // csl(b.result.flights[0].flight.legs[0].duration);

