'use strict';
let money = +prompt("Budget for a month", " ");
let time = prompt("Enter date please YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    expenses: {},
    income: [],
    savings: false
};
let requiredItem = prompt("Enter the required item this month", " ");
let costOfItem = +prompt("How much it costs", " ");

appData.expenses[requiredItem] = costOfItem;




console.log(appData);
console.log(appData.expenses);
let budgetForOneDay = money / 30;
alert("Budget for a one day" + budgetForOneDay);