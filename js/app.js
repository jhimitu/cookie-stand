'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let locations = [];
console.log(locations);

function Store(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location; //a string
  this.minCustomers = minCustomers; //a number
  this.maxCustomers = maxCustomers; //a number
  this.avgCookiesPerCustomer = avgCookiesPerCustomer; //a number
  this.cookiesEachHour = []; //an array
  this.cookiesPurchased = 0; //a number

  locations.push(this);

  console.log(this);
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
  console.log(this.cookiesEachHour);
},

Store.prototype.calcTotalCookiesPurchased = function() {
  //TODO: sum cookies each hour into total of cookies for the day
  this.cookiesPurchased = this.cookiesEachHour.reduce((acc, val) => {
    return acc + val;
  });
  console.log(this.cookiesPurchased);
},

Store.prototype.render = function() {
  //TODO: render a row of store data to the table on sales page
  //do DOM stuff here

  //use createHeader

  //create a tbody el
  //for each location
    //create a tr element
    //create a th
    //add text with location name
    //append th to tr
    //for each hour
      //create a td element
      //add text content from cookie totals array item with corresponding index
      //append td to tr
  //append tr to tbody

  //use createFooter
  console.log('this is: render');
}

const createHeader = function() {
  //TODO: create a header row for table on sales page
  //do DOM stuff here
  let table = document.getElementById('daily-sales-projections');
  let tblHead = document.createElement('thead');

  table.appendChild(tblHead);
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
  //TODO: create a footer row for table on sales page
  //do DOM stuff here
  //grab the table element
  //create a tfoot element
  //append tfoot to table
  //create a row and append to tfoot

  //for each hour
    //for each location
      //take the total cookies for hour
      //add number to an array
    //sum the total cookies from each location for the hour
    //create a td element
    //append td to tr

  //for each row
    //grad the last child element
    //push data of child el to an array
  //reduce array of child element data
  //append to row
  console.log('this is: createFooter');
}


let firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
let seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
let seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
let capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
let alki = new Store('Alki', 2, 16, 4.6);

firstAndPike.generateRandomNumOfCustomers();
firstAndPike.calcCookiesEachHour();
firstAndPike.calcTotalCookiesPurchased();

seatacAirport.generateRandomNumOfCustomers();
seatacAirport.calcCookiesEachHour();
seatacAirport.calcTotalCookiesPurchased();

seattleCenter.generateRandomNumOfCustomers();
seattleCenter.calcCookiesEachHour();
seattleCenter.calcTotalCookiesPurchased();

capitolHill.generateRandomNumOfCustomers();
capitolHill.calcCookiesEachHour();
capitolHill.calcTotalCookiesPurchased();

alki.generateRandomNumOfCustomers();
alki.calcCookiesEachHour();
alki.calcTotalCookiesPurchased();







































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