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

for (let i = 0; i < 2; i++) {
  let requiredItem = prompt("Enter the required item this month", " "),
    costOfItem = +prompt("How much it costs", " ");
  if (
    typeof requiredItem == "string" &&
    typeof requiredItem != null &&
    typeof costOfItem != null &&
    requiredItem != " " &&
    costOfItem != " " &&
    requiredItem.length < 50
  ) {
    console.log("good");
    appData.expenses[requiredItem] = costOfItem;
  } else {
    console.log("one more time");
    i = i - 1;
  }
}
function detectLevel() {
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
}
detectLevel();

console.log(appData);
console.log(appData.expenses);

let detectDayBudget = () => alert("Budget for a one day" + appData.budget / 30);
detectDayBudget();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let notRequiredItem = prompt("Not required item for a month", " "),
      costNotRequiredItem = +prompt("How much it costs", " ");
    if (
      typeof notRequiredItem == "string" &&
      typeof notRequiredItem != null &&
      typeof costNotRequiredItem != null &&
      notRequiredItem != " " &&
      costNotRequiredItem != " " &&
      notRequiredItem.length < 50
    ) {
      console.log("good");
      appData.optionalExpenses[notRequiredItem] = costNotRequiredItem;
    } else {
      console.log("try one more time");
      i = i - 1;
    }
  }
}
chooseOptExpenses();

console.log(appData.optionalExpenses);
