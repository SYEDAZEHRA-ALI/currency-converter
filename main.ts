import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold("\n \tWELCOME TO SYEDA'S CURRENCY CONVERTER\n"));

//define list of currencies and their exchange 
//object
let exchange_rate :any ={
    "USD":1, //base currency
    "EUR":0.9, //european currency"euro"
    "JYP":113,  //japanese currency "yen"
    "CAD":1.3,  //canadian dollar
    "AUD":1.65,  //australian dollar
    "PKR":280, // pakistan rupees
}
//prompt the user to select currency to convert from and to..
let user_answer = await inquirer.prompt([{
      name:"from_currency",
      type:"list",
      message:"saelect the currency to convert from:",
      choices:["USD","EUR","JYP","CAD","AUD","PKR"]
},
{
    name:"to_currency",
    type:"list",
    message:"select the currency to convert into:",
    choices:["USD","EUR","JYP","CAD","AUD","PKR"]
},
{
    name:"amount",
    type:"input",
    message:"Enter the amount to convert:"
}
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount =exchange_rate[user_answer.to_currency];
let amount= user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
//display the converted amount now
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
