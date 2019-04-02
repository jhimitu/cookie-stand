'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//********* FIRST AND PIKE *********//

let firstAndPike = {
  minNumberOfCustomers: 23,
  maxNumberOfCustomers: 65,
  averageNumOfCookiesPurchasedPerCustomer: 6.3,
  generateARandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
  },
  simulateCookiesPurchasedPerHour: function () {
    hours.forEach((hour) => {
      let customers = this.generateARandomNumberOfCustomers();
      let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
      this.cookiePurchaseTotalsPerHour.push(cookiesPurchased);
    });
  },
  cookiePurchaseTotalsPerHour: [],
  calculateTotalCookiesPurchased: function () {
    return this.cookiePurchaseTotalsPerHour.reduce((acc, val) => {
      return acc + val;
    });
  },
  displayCookiesPerHour: function () {
    let listElement = document.getElementById('first-and-pike');
    this.cookiePurchaseTotalsPerHour.forEach((purchaseTotal, i) => {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
      listElement.appendChild(listItem);
    });
    let lastListItem = document.createElement('li');
    lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
    listElement.appendChild(lastListItem);
  }
};

//********* SEATAC AIRPORT *********//

let seatacAirport = {
  minNumberOfCustomers: 3,
  maxNumberOfCustomers: 24,
  averageNumOfCookiesPurchasedPerCustomer: 1.2,
  generateARandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
  },
  simulateCookiesPurchasedPerHour: function () {
    hours.forEach((hour) => {
      let customers = this.generateARandomNumberOfCustomers();
      let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
      this.cookiePurchaseTotalsPerHour.push(cookiesPurchased);
    });
  },
  cookiePurchaseTotalsPerHour: [],
  calculateTotalCookiesPurchased: function () {
    return this.cookiePurchaseTotalsPerHour.reduce((acc, val) => {
      return acc + val;
    });
  },
  displayCookiesPerHour: function () {
    let listElement = document.getElementById('seatac-airport');
    this.cookiePurchaseTotalsPerHour.forEach((purchaseTotal, i) => {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
      listElement.appendChild(listItem);
    });
    let lastListItem = document.createElement('li');
    lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
    listElement.appendChild(lastListItem);
  }
};

//********* SEATTLE CENTER *********//

let seattleCenter = {
  minNumberOfCustomers: 11,
  maxNumberOfCustomers: 38,
  averageNumOfCookiesPurchasedPerCustomer: 2.3,
  generateARandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
  },
  simulateCookiesPurchasedPerHour: function () {
    hours.forEach((hour) => {
      let customers = this.generateARandomNumberOfCustomers();
      let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
      this.cookiePurchaseTotalsPerHour.push(cookiesPurchased);
    });
  },
  cookiePurchaseTotalsPerHour: [],
  calculateTotalCookiesPurchased: function () {
    return this.cookiePurchaseTotalsPerHour.reduce((acc, val) => {
      return acc + val;
    });
  },
  displayCookiesPerHour: function () {
    let listElement = document.getElementById('seattle-center');
    this.cookiePurchaseTotalsPerHour.forEach((purchaseTotal, i) => {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
      listElement.appendChild(listItem);
    });
    let lastListItem = document.createElement('li');
    lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
    listElement.appendChild(lastListItem);
  }
};

//********* CAPITOL HILL *********//

let capitolHill = {
  minNumberOfCustomers: 20,
  maxNumberOfCustomers: 38,
  averageNumOfCookiesPurchasedPerCustomer: 2.3,
  generateARandomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxNumberOfCustomers - this.minNumberOfCustomers)) + this.minNumberOfCustomers;
  },
  simulateCookiesPurchasedPerHour: function () {
    hours.forEach((hour) => {
      let customers = this.generateARandomNumberOfCustomers();
      let cookiesPurchased = Math.ceil(customers * this.averageNumOfCookiesPurchasedPerCustomer);
      this.cookiePurchaseTotalsPerHour.push(cookiesPurchased);
    });
  },
  cookiePurchaseTotalsPerHour: [],
  calculateTotalCookiesPurchased: function () {
    return this.cookiePurchaseTotalsPerHour.reduce((acc, val) => {
      return acc + val;
    });
  },
  displayCookiesPerHour: function () {
    let listElement = document.getElementById('capitol-hill');
    this.cookiePurchaseTotalsPerHour.forEach((purchaseTotal, i) => {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${purchaseTotal} cookies`;
      listElement.appendChild(listItem);
    });
    let lastListItem = document.createElement('li');
    lastListItem.textContent = `Total: ${this.calculateTotalCookiesPurchased()} cookies`;
    listElement.appendChild(lastListItem);
  }
};

// let alki = {
//   minNumberOfCustomers: 2,
//   maxNumberOfCustomers: 16,
//   averageNumOfCookiesPurchasedPerCustomer: 4.6,
//   generateARandomNumberOfCustomers: function () {

//   },
//   simulateCookiesPurchasedPerHour: function () {

//   },
//   cookiePurchaseTotalsPerHour: [],
//   totalCookiesPurchasedPerDay: 0
// };

firstAndPike.generateARandomNumberOfCustomers();
firstAndPike.simulateCookiesPurchasedPerHour();
firstAndPike.calculateTotalCookiesPurchased();
firstAndPike.displayCookiesPerHour();

seatacAirport.generateARandomNumberOfCustomers();
seatacAirport.simulateCookiesPurchasedPerHour();
seatacAirport.calculateTotalCookiesPurchased();
seatacAirport.displayCookiesPerHour();

seattleCenter.generateARandomNumberOfCustomers();
seattleCenter.simulateCookiesPurchasedPerHour();
seattleCenter.calculateTotalCookiesPurchased();
seattleCenter.displayCookiesPerHour();

capitolHill.generateARandomNumberOfCustomers();
capitolHill.simulateCookiesPurchasedPerHour();
capitolHill.calculateTotalCookiesPurchased();
capitolHill.displayCookiesPerHour();