'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let Store = (location, minCustomers, maxCustomers, avgCookiesPerCustomer) => {
  this.location = location; //a string
  this.minCustomers = minCustomers; //a number
  this.maxCustomers = maxCustomers; //a number
  this.avgCookiesPerCustomer = avgCookiesPerCustomer; //a number
  this.cookiesEachHour = []; //an array
  this.cookiesPurchased = 0; //a number
}

Store.prototype.generateRandomNumOfCustomers = () => {
  //TODO: generate a random number using max and min of customers
}

Store.prototype.calcCookiesEachHour = () => {
  //TODO: calcuate cookies needed using random number and average cookies per customer for each hour
}

Store.prototype.calcTotalCookiesPurchased = () => {
  //TODO: sum cookies each hour into total of cookies for the day
}

Store.prototype.render = () => {
  //TODO: render a row of store data to the table on sales page
  //do DOM stuff here
  //use createHeader
  //use createFooter
}

const createHeader = () => {
  //TODO: create a header row for table on sales page
  //do DOM stuff here
}

const createFooter = () => {
  //TODO: create a footer row for table on sales page
  //do DOM stuff here
}


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