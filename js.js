"use strict";
let money = +prompt("Budget for a month", " "),
    time = prompt("Enter date please YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    expenses: {},
    income: [],
    savings: false
};


/*for (let i = 0; i < 2; i++) {
    let requiredItem = prompt("Enter the required item this month", " "),
        costOfItem = +prompt("How much it costs", " ");
    if ((typeof (requiredItem)) == 'string' && (typeof (requiredItem)) != null &&
        (typeof (costOfItem)) != null && requiredItem != " " && costOfItem != " " && requiredItem.length < 50) {
        console.log('good');
        appData.expenses[requiredItem] = costOfItem;
    } else {
        console.log("one more time");
        i = i - 1;
    }

}*/
let i = 0;


do {
    let requiredItem = prompt("Enter the required item this month", " "),
        costOfItem = +prompt("How much it costs", " ");
    if ((typeof (requiredItem)) == 'string' && (typeof (requiredItem)) != null &&
        (typeof (costOfItem)) != null && requiredItem != " " && costOfItem != " " && requiredItem.length < 50) {
        console.log('good');
        appData.expenses[requiredItem] = costOfItem;
    } else {
        console.log("one more time");
        i = i - 1;
    }
    i++;
} while (i < 2);




appData.moneyPerDay = appData.budget / 30;
if (appData.moneyPerDay < 100) {
    console.log("Low");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("MIdlle");
} else if (appData.moneyPerDay > 2000) {
    console.log("Hight");
} else {
    console.log("Error");
}




console.log(appData);
console.log(appData.expenses);
let budgetForOneDay = money / 30;
alert("Budget for a one day" + budgetForOneDay);