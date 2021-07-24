
let bill_amount = document.getElementById("bill_amount");

let cash_given = document.getElementById("cash_given");

let submit_button = document.getElementById("submit_btn");

let para = document.getElementById("demo");

let output_demo = document.getElementById("demo1");


function calculate(event){
 
    event.preventDefault();

    let cashToBeGiven = bill_amount.value - cash_given.value;

    para.innerHTML = cashToBeGiven;

    let notes = [2000, 500, 100, 20, 10, 5, 1];
    let currencyCount = Array(8).fill(0);
    //console.log(currencyCount);

    for(let i = 0; i < 8; i++){
        if(cashToBeGiven  >= notes[i]){
            currencyCount[i] = Math.floor(cashToBeGiven/notes[i]);
            cashToBeGiven = cashToBeGiven - (currencyCount[i] * notes[i]);
        }
    }

   document.getElementById("currency_heading").innerHTML = ("Number of notes to return: " + "<br />");
    for(let i = 0; i < 8; i++){
        if(currencyCount[i] != 0){
            output_demo.innerHTML += notes[i] + " : " + currencyCount[i] + "<br />";
        }
    }
};

submit_button.addEventListener('click', calculate);