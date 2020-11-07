export { TEMPLATE, CARDLIST, SHOW_MORE_BUTTON, URL_API };

const TEMPLATE = document.querySelector('.template').content;
const CARDLIST = document.querySelector('.container');
const SHOW_MORE_BUTTON = document.querySelector('#show-more-button');
const URL_API = NODE_ENV === 'production' ? require('./flights.json') : 'src/js/constans/flights.json';

