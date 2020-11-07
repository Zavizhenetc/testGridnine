function csl(elem){
  console.log(elem);
}


import './index.css';
import Api from './js/modules/Api';
import DataStorage from './js/modules/DataStorage';
import Card from './js/components/flyCard';
import CardList from './js/components/flyCardList';
import {TEMPLATE, CARDLIST, SHOW_MORE_BUTTON, URL_API} from './js/constans/constans';



const flyCardsList = new CardList(CARDLIST)
const api = new Api(URL_API);
const storage = new DataStorage();
// csl(SHOW_MORE_BUTTON);



// добавляем еще билетов
SHOW_MORE_BUTTON.addEventListener('click', () => {
  showMore(count());
})


// записываем в сторедж данные с сервера 
api
    .getRes()
    .then((res) => {
      storage.set(res)
    })
    .catch((err) => {
      console.log(`Ошибка ${err} `);
    });
    

// рендер данных
function getStorageCards(){
  window.count = 0;
    const storageCards = storage.getCards();
    const filterCards = storageCards.result.flights.map(({ flight }) => flight);

    const flyCard = filterCards.map((data) => {
      return new Card(data, TEMPLATE).createCard();
    });
    const cardsSlice = flyCard.slice(0, 4);
    flyCardsList.render(cardsSlice);
  }

  // считаем количество билетов 
  function count() {
    let count = window.count;
    if (isNaN(count) || count === 0) {
      return 6;
    }
    return count + 4;
  }
// добавляем еще билетов
  function showMore(count) {
    const storageCards = storage.getCards();
    const filterCards = storageCards.result.flights.map(({ flight }) => flight);

    const flyCard = filterCards.map((data) => {
      return new Card(data, TEMPLATE).createCard();
    });
    const cardsSlice = flyCard.slice(0, count);
    flyCardsList.remove();
    flyCardsList.render(cardsSlice);
    window.count = cardsSlice.length;
  }

  getStorageCards();