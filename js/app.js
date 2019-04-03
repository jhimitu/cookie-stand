'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let locations = [];

//******** FORM ********//
let form = document.getElementById('location-form');
form.addEventListener('submit', handleAddStore);
// console.log(form);

//********* CONSTRUCTOR **********/

function Store(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesEachHour = [];
  this.cookiesPurchased = 0;

  locations.push(this);
}

Store.prototype.generateRandomNumOfCustomers = function() {
  let max = this.maxCustomers;
  let min = this.minCustomers;

  return Math.floor(Math.random() * (max - min + 1) + min);
},

Store.prototype.calcCookiesEachHour = function() {
  hours.forEach(() => {
    let customers = this.generateRandomNumOfCustomers();
    let cookiesForHour = Math.ceil(customers * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(cookiesForHour);
  });
},

Store.prototype.calcTotalCookiesPurchased = function() {
  this.cookiesPurchased = this.cookiesEachHour.reduce((acc, val) => {
    return acc + val;
  });
},

Store.prototype.render = function() {
  document.getElementsByTagName('tbody')[0].setAttribute('id', 'table-body'); //W3schools https://www.w3schools.com/jsref/met_element_setattribute.asp
  let tblBody = document.getElementById('table-body');
  let tblRow = document.createElement('tr');
  let tblHead = document.createElement('th');

  tblBody.appendChild(tblRow);
  tblHead.textContent = this.location;
  tblRow.appendChild(tblHead);

  hours.forEach((hours, i) => {
    let tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesEachHour[i]}`;
    tblRow.appendChild(tdElem);
  });

  let endData = document.createElement('td');
  endData.textContent = this.cookiesPurchased;
  tblRow.appendChild(endData);
}

//******** HELPER FUNCTIONS ********//

const createHeader = function() {
  let table = document.getElementById('daily-sales-projections');
  let tblHead = document.createElement('thead');
  let tblBody = document.createElement('tbody');
  
  table.appendChild(tblHead);
  table.appendChild(tblBody);

  let trElem = document.createElement('tr');
  let thPlaceholder = document.createElement('th');
  let thEnd = document.createElement('th');

  tblHead.appendChild(trElem);
  trElem.appendChild(thPlaceholder);

  hours.forEach((hour) => {
    let thElem = document.createElement('th');
    thElem.textContent = `${hour}`;
    trElem.appendChild(thElem);
  });

  thEnd.textContent = 'Daily Location Total';
  trElem.appendChild(thEnd);
}

const createFooter = function() {
  let table = document.getElementById('daily-sales-projections');
  let tblFoot = document.createElement('tfoot');
  let trElem = document.createElement('tr');
  let firstTdEl = document.createElement('td');
  
  firstTdEl.textContent = 'Totals';
  
  table.appendChild(tblFoot);
  tblFoot.appendChild(trElem);
  trElem.appendChild(firstTdEl);

  let hourlyTotalsForAll = [];

  hours.forEach((hour, i) => {
    let totalCookiesPerLocationEachHour = [];

    locations.forEach((location) => {
      totalCookiesPerLocationEachHour.push(location.cookiesEachHour[i]);
    });

    let total = totalCookiesPerLocationEachHour.reduce((acc, val) => {
      hourlyTotalsForAll.push(acc + val);
      return acc + val;
    });

    let tdElem = document.createElement('td');
    tdElem.textContent = `${total}`;
    trElem.appendChild(tdElem);
  });

  let endData = hourlyTotalsForAll.reduce((acc, val) => {
    return acc + val;
  });
  let tfEnd = document.createElement('td');
  tfEnd.textContent = endData;
  trElem.appendChild(tfEnd);
}

function handleAddStore(e) {
  e.preventDefault();
  console.log(e.target[1].value);
};


let firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
let seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
let seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
let capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
let alki = new Store('Alki', 2, 16, 4.6);

createHeader();

firstAndPike.generateRandomNumOfCustomers();
firstAndPike.calcCookiesEachHour();
firstAndPike.calcTotalCookiesPurchased();
firstAndPike.render();

seatacAirport.generateRandomNumOfCustomers();
seatacAirport.calcCookiesEachHour();
seatacAirport.calcTotalCookiesPurchased();
seatacAirport.render();

seattleCenter.generateRandomNumOfCustomers();
seattleCenter.calcCookiesEachHour();
seattleCenter.calcTotalCookiesPurchased();
seattleCenter.render();

capitolHill.generateRandomNumOfCustomers();
capitolHill.calcCookiesEachHour();
capitolHill.calcTotalCookiesPurchased();
capitolHill.render();

alki.generateRandomNumOfCustomers();
alki.calcCookiesEachHour();
alki.calcTotalCookiesPurchased();
alki.render();

createFooter();