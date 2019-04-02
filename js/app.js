'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
      this.cookiePurchaseTotalsPerHour.push(`${hour}: ${cookiesPurchased} cookies`);
    });
    console.log(this.cookiePurchaseTotalsPerHour);
  },
  cookiePurchaseTotalsPerHour: [],
  totalCookiesPurchasedPerDay: 0
};

// let seatacAirport = {
//   minNumberOfCustomers: 3,
//   maxNumberOfCustomers: 24,
//   averageNumOfCookiesPurchasedPerCustomer: 1.2,
//   generateARandomNumberOfCustomers: function () {

//   },
//   simulateCookiesPurchasedPerHour: function () {

//   },
//   cookiePurchaseTotalsPerHour: [],
//   totalCookiesPurchasedPerDay: 0
// };

// let seattleCenter = {
//   minNumberOfCustomers: 11,
//   maxNumberOfCustomers: 38,
//   averageNumOfCookiesPurchasedPerCustomer: 2.3,
//   generateARandomNumberOfCustomers: function () {

//   },
//   simulateCookiesPurchasedPerHour: function () {

//   },
//   cookiePurchaseTotalsPerHour: [] ,
//   totalCookiesPurchasedPerDay: 0  
// };

// let capitolHill = {
//   minNumberOfCustomers: 20,
//   maxNumberOfCustomers: 38,
//   averageNumOfCookiesPurchasedPerCustomer: 2.3,
//   generateARandomNumberOfCustomers: function () {

//   },
//   simulateCookiesPurchasedPerHour: function () {

//   },
//   cookiePurchaseTotalsPerHour: [],
//   totalCookiesPurchasedPerDay: 0
// };

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

