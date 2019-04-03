'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let locations = [];
// console.log(locations);

function Store(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location; //a string
  this.minCustomers = minCustomers; //a number
  this.maxCustomers = maxCustomers; //a number
  this.avgCookiesPerCustomer = avgCookiesPerCustomer; //a number
  this.cookiesEachHour = []; //an array
  this.cookiesPurchased = 0; //a number

  locations.push(this);

  // console.log(this);
}

Store.prototype.generateRandomNumOfCustomers = function() {
  //TODO: generate a random number using max and min of customers
  let max = this.maxCustomers;
  let min = this.minCustomers;

  return Math.floor(Math.random() * (max - min + 1) + min);
},

Store.prototype.calcCookiesEachHour = function() {
  //TODO: calcuate cookies needed using random number and average cookies per customer for each hour
  hours.forEach(() => {
    let customers = this.generateRandomNumOfCustomers();
    let cookiesForHour = Math.ceil(customers * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(cookiesForHour);
  });
  // console.log(this.cookiesEachHour);
},

Store.prototype.calcTotalCookiesPurchased = function() {
  //TODO: sum cookies each hour into total of cookies for the day
  this.cookiesPurchased = this.cookiesEachHour.reduce((acc, val) => {
    return acc + val;
  });
  // console.log(this.cookiesPurchased);
},

Store.prototype.render = function() {
  //TODO: render a row of store data to the table on sales page
  //do DOM stuff here
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






































//********* FIRST AND PIKE *********//

// let firstAndPike = {
//   minNumberOfCustomers: 23,
//   maxNumberOfCustomers: 65,
//   averageNumOfCookiesPurchasedPerCustomer: 6.3,
//   generateARandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
//   },
//   simulateCookiesPurchasedPerHour: function () {
//     hours.forEach(() => {
//       let customers = this.generateARandomNumberOfCustomers();
//       let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
//       this.totalsOfCookiesPurchasedPerHour.push(cookiesPurchased);
//     });
//   },
//   totalsOfCookiesPurchasedPerHour: [],
//   calculateTotalCookiesPurchased: function () {
//     return this.totalsOfCookiesPurchasedPerHour.reduce((acc, val) => {
//       return acc + val;
//     });
//   },
//   displayCookiesPerHour: function () {
//     let listElement = document.getElementById('first-and-pike');
//     this.totalsOfCookiesPurchasedPerHour.forEach((purchaseTotal, i) => {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
//       listElement.appendChild(listItem);
//     });
//     let lastListItem = document.createElement('li');
//     lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
//     listElement.appendChild(lastListItem);
//   }
// };

//********* SEATAC AIRPORT *********//

// let seatacAirport = {
//   minNumberOfCustomers: 3,
//   maxNumberOfCustomers: 24,
//   averageNumOfCookiesPurchasedPerCustomer: 1.2,
//   generateARandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
//   },
//   simulateCookiesPurchasedPerHour: function () {
//     hours.forEach(() => {
//       let customers = this.generateARandomNumberOfCustomers();
//       let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
//       this.totalsOfCookiesPurchasedPerHour.push(cookiesPurchased);
//     });
//   },
//   totalsOfCookiesPurchasedPerHour: [],
//   calculateTotalCookiesPurchased: function () {
//     return this.totalsOfCookiesPurchasedPerHour.reduce((acc, val) => {
//       return acc + val;
//     });
//   },
//   displayCookiesPerHour: function () {
//     let listElement = document.getElementById('seatac-airport');
//     this.totalsOfCookiesPurchasedPerHour.forEach((purchaseTotal, i) => {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
//       listElement.appendChild(listItem);
//     });
//     let lastListItem = document.createElement('li');
//     lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
//     listElement.appendChild(lastListItem);
//   }
// };

//********* SEATTLE CENTER *********//

// let seattleCenter = {
//   minNumberOfCustomers: 11,
//   maxNumberOfCustomers: 38,
//   averageNumOfCookiesPurchasedPerCustomer: 2.3,
//   generateARandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
//   },
//   simulateCookiesPurchasedPerHour: function () {
//     hours.forEach(() => {
//       let customers = this.generateARandomNumberOfCustomers();
//       let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
//       this.totalsOfCookiesPurchasedPerHour.push(cookiesPurchased);
//     });
//   },
//   totalsOfCookiesPurchasedPerHour: [],
//   calculateTotalCookiesPurchased: function () {
//     return this.totalsOfCookiesPurchasedPerHour.reduce((acc, val) => {
//       return acc + val;
//     });
//   },
//   displayCookiesPerHour: function () {
//     let listElement = document.getElementById('seattle-center');
//     this.totalsOfCookiesPurchasedPerHour.forEach((purchaseTotal, i) => {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
//       listElement.appendChild(listItem);
//     });
//     let lastListItem = document.createElement('li');
//     lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
//     listElement.appendChild(lastListItem);
//   }
// };

//********* CAPITOL HILL *********//

// let capitolHill = {
//   minNumberOfCustomers: 20,
//   maxNumberOfCustomers: 38,
//   averageNumOfCookiesPurchasedPerCustomer: 2.3,
//   generateARandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
//   },
//   simulateCookiesPurchasedPerHour: function () {
//     hours.forEach(() => {
//       let customers = this.generateARandomNumberOfCustomers();
//       let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
//       this.totalsOfCookiesPurchasedPerHour.push(cookiesPurchased);
//     });
//   },
//   totalsOfCookiesPurchasedPerHour: [],
//   calculateTotalCookiesPurchased: function () {
//     return this.totalsOfCookiesPurchasedPerHour.reduce((acc, val) => {
//       return acc + val;
//     });
//   },
//   displayCookiesPerHour: function () {
//     let listElement = document.getElementById('capitol-hill');
//     this.totalsOfCookiesPurchasedPerHour.forEach((purchaseTotal, i) => {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
//       listElement.appendChild(listItem);
//     });
//     let lastListItem = document.createElement('li');
//     lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
//     listElement.appendChild(lastListItem);
//   }
// };

//********* ALKI *********//

// let alki = {
//   minNumberOfCustomers: 2,
//   maxNumberOfCustomers: 16,
//   averageNumOfCookiesPurchasedPerCustomer: 4.6,
//   generateARandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
//   },
//   simulateCookiesPurchasedPerHour: function () {
//     hours.forEach(() => {
//       let customers = this.generateARandomNumberOfCustomers();
//       let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
//       this.totalsOfCookiesPurchasedPerHour.push(cookiesPurchased);
//     });
//   },
//   totalsOfCookiesPurchasedPerHour: [],
//   calculateTotalCookiesPurchased: function () {
//     return this.totalsOfCookiesPurchasedPerHour.reduce((acc, val) => {
//       return acc + val;
//     });
//   },
//   displayCookiesPerHour: function () {
//     let listElement = document.getElementById('alki');
//     this.totalsOfCookiesPurchasedPerHour.forEach((purchaseTotal, i) => {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
//       listElement.appendChild(listItem);
//     });
//     let lastListItem = document.createElement('li');
//     lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
//     listElement.appendChild(lastListItem);
//   }
// };



// firstAndPike.generateARandomNumberOfCustomers();
// firstAndPike.simulateCookiesPurchasedPerHour();
// firstAndPike.calculateTotalCookiesPurchased();
// firstAndPike.displayCookiesPerHour();

// seatacAirport.generateARandomNumberOfCustomers();
// seatacAirport.simulateCookiesPurchasedPerHour();
// seatacAirport.calculateTotalCookiesPurchased();
// seatacAirport.displayCookiesPerHour();

// seattleCenter.generateARandomNumberOfCustomers();
// seattleCenter.simulateCookiesPurchasedPerHour();
// seattleCenter.calculateTotalCookiesPurchased();
// seattleCenter.displayCookiesPerHour();

// capitolHill.generateARandomNumberOfCustomers();
// capitolHill.simulateCookiesPurchasedPerHour();
// capitolHill.calculateTotalCookiesPurchased();
// capitolHill.displayCookiesPerHour();

// alki.generateARandomNumberOfCustomers();
// alki.simulateCookiesPurchasedPerHour();
// alki.calculateTotalCookiesPurchased();
// alki.displayCookiesPerHour();