export default class Card {
  constructor(data, TEMPLATE) {
    this.template = TEMPLATE;

    this.price = data.price.total.amount;
   this.transferTo = data.legs[0].segments.length;


    this.durationTo = data.legs[0].duration;
    this.departureUidTo =data.legs[0].segments[0].departureAirport.uid;
    this.departureCityTo =data.legs[0].segments[0].departureCity.caption;
    this.departureAirportTo =data.legs[0].segments[0].departureAirport.caption;
    this.aircompanyTo =data.carrier.caption;
    this.departureDateTo =data.legs[0].segments[0].departureDate; 

  
    this.arrivalUidTo = data.legs[0].segments.length>1 ? data.legs[0].segments[1].arrivalAirport.uid : data.legs[0].segments[0].arrivalAirport.uid;
    // this.arrivalCityTo = data.legs[0].segments[1].arrivalCity.caption; 

    this.arrivalCityTo = data.legs[0].segments.length>1 ? data.legs[0].segments[1].arrivalAirport.caption : data.legs[0].segments[0].arrivalCity.caption;

    // this.arrivalAirportTo =data.legs[0].segments[0].arrivalAirport.caption;
    this.arrivalAirportTo = data.legs[0].segments.length>1 ? data.legs[0].segments[1].arrivalAirport.caption : data.legs[0].segments[0].arrivalAirport.caption;
    this.arrivalDateTo = data.legs[0].segments.length>1 ? data.legs[0].segments[1].arrivalDate : data.legs[0].segments[0].arrivalDate;
    

    this.durationFrom = data.legs[1].duration;
   this.transferFrom = data.legs[1].segments.length;

   this.aircompanyFrom = data.carrier.caption;
   this.departureUidFrom = data.legs[1].segments[0].departureAirport.uid;
   this.departureAirportFrom =data.legs[1].segments[0].departureAirport.caption;
  //  this.departureCityFrom =data.legs[1].segments[0].departureCity.caption;
  this.departureDateFrom =data.legs[1].segments[0].departureDate; 
  this.arrivalDateFrom = data.legs[1].segments.length>1 ? data.legs[1].segments[1].arrivalDate : data.legs[1].segments[0].arrivalDate;
  this.arrivalUidFrom = data.legs[1].segments.length>1 ? data.legs[1].segments[1].arrivalAirport.uid : data.legs[1].segments[0].arrivalAirport.uid;
  this.arrivalAirportFrom = data.legs[1].segments.length>1 ? data.legs[1].segments[1].arrivalAirport.caption : data.legs[1].segments[0].arrivalAirport.caption;




  


   
  }
  _date(elem) {
    return new Date(elem).toLocaleString('ru', {
      hour:'numeric',
      minute:'numeric',
      day: '2-digit',
      month: 'short',
      weekday: "short",
     

    });
  }

  _transfer(elem){
    if(elem > 1){
      return `${elem - 1} пересадка`
    } else {
      return `без пересадок`
    }
    
  }

  createCard() {
    this.container = this.template.cloneNode(true);
// console.log(this.arrivalCityTo)
    // цена
    this.container.querySelector('.ticket__header-price').textContent = `${this.price} RUB`;
    // кол-во пересадок туда
    this.container.querySelector('.ticket-to__transfer-num').textContent = this._transfer(this.transferTo);
    // время полета туда
    this.container.querySelector('.ticket-to__duration-hours' ).textContent = `🕤 ${Math.trunc(this.durationTo/60)}`;
    this.container.querySelector('.ticket-to__duration-minutes').textContent = this.durationTo%60;
    // компания перевозчик туда
    this.container.querySelector('.ticket-to__aircompany').textContent = `Рейс выполняет: ${this.aircompanyTo}`;
   //код аэропорта вылета туда
    this.container.querySelector('.ticket-to__departure-airport-uid').textContent = `(${this.departureUidTo})`;
    // Название аэропорта вылета  туда
    this.container.querySelector('.ticket-to__departure-airport-caption').textContent = this.departureAirportTo;
// город вылета туда
    this.container.querySelector('.ticket-to__departure-city').textContent = this.departureCityTo;
// время посадки туда
    this.container.querySelector('.ticket-to__departure-time').textContent = this._date(this.departureDateTo).slice(-5) ;
    this.container.querySelector('.ticket-to__departure-date').textContent = this._date(this.departureDateTo).slice(0,-8);
    // время прибытия туда
    this.container.querySelector('.ticket-to__arrival-time').textContent = this._date(this.arrivalDateTo).slice(-5) ;
    this.container.querySelector('.ticket-to__arrival-date').textContent = this._date(this.arrivalDateTo).slice(0,-8);
    //код аэропорта прибытия туда
    this.container.querySelector('.ticket-to__arrival-airport-uid').textContent = `(${this.arrivalUidTo})`;
     // Название аэропорта прибытия  туда
    this.container.querySelector('.ticket-to__arrival-airport-caption').textContent = this.arrivalAirportTo;
    // // город прибытия туда
    // this.container.querySelector('.ticket-to__arrival-city').textContent = this.arrivalCityTo;

    // обратно

    // кол-во пересадок обратно
    this.container.querySelector('.ticket-from__transfer-num').textContent = this._transfer(this.transferFrom);

    // компания перевозчик обратно
    this.container.querySelector('.ticket-from__aircompany').textContent = `Рейс выполняет: ${this.aircompanyFrom}`;
     // время полета обратно
    this.container.querySelector('.ticket-from__duration-hours').textContent = `🕤 ${Math.trunc(this.durationFrom/60)}`;
    this.container.querySelector('.ticket-from__duration-minutes').textContent = this.durationFrom%60;
   //код аэропорта вылета обратно
    this.container.querySelector('.ticket-from__departure-airport-uid').textContent = `(${this.departureUidFrom})`;
    // Название аэропорта вылета  обратно
    this.container.querySelector('.ticket-from__departure-airport-caption').textContent = this.departureAirportFrom;
// город вылета обратно
    // this.container.querySelector('.ticket-from__departure-city').textContent = this.departureCityFrom;
// время посадки обратно
    this.container.querySelector('.ticket-from__departure-time').textContent = this._date(this.departureDateFrom).slice(-5) ;
    this.container.querySelector('.ticket-from__departure-date').textContent = this._date(this.departureDateFrom).slice(0,-8);
    // время прибытия обратно
    this.container.querySelector('.ticket-from__arrival-time').textContent = this._date(this.arrivalDateFrom).slice(-5) ;
    this.container.querySelector('.ticket-from__arrival-date').textContent = this._date(this.arrivalDateFrom).slice(0,-8);
    //код аэропорта прибытия обратно
    this.container.querySelector('.ticket-from__arrival-airport-uid').textContent = `(${this.arrivalUidFrom})`;
     // Название аэропорта прибытия  обратно
    this.container.querySelector('.ticket-from__arrival-airport-caption').textContent = this.arrivalAirportFrom;


    return this.container;
  
  }
}
