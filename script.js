
let bill_amount = document.getElementById("bill_amount");

let cash_given = document.getElementById("cash_given");

let submit_button = document.getElementById("submit_btn");

let output_demo = document.getElementById("demo");


function calculate(event){
 
    event.preventDefault();

    let cashToBeGiven = bill_amount.value - cash_given.value;
    console.log(cashToBeGiven);

    let notes = [2000, 500, 100, 20, 10, 5, 1];
    let currencyCount = Array(7).fill(0);

    for(let i = 0; i < 7; i++){
        if(cashToBeGiven  >= notes[i]){
            currencyCount[i] = Math.floor(cashToBeGiven/notes[i]);
            cashToBeGiven = cashToBeGiven - (currencyCount[i] * notes[i]);
        }
    }

   document.getElementById("currency_heading").innerHTML = ("Number of notes to return: " + "<br />");
    for(let i = 0; i < 7; i++){
        if(currencyCount[i] != 0){
            output_demo.innerHTML += notes[i] + " : " + currencyCount[i] + "<br />";

            if(notes[i] == 1){
                document.getElementById("demo1").innerHTML += currencyCount[i] + "<br />";
            }
            else if(notes[i] === 5){
                document.querySelector("#demo2").innerHTML += currencyCount[i] + "<br />";
            }
            else if(notes[i] == 10){
                document.getElementById("demo3").innerHTML += currencyCount[i] + "<br />";
            }
            else if(notes[i] == 20){
                document.getElementById("demo4").innerHTML += currencyCount[i] + "<br />";
            }
            else if(notes[i] == 100){
                document.getElementById("demo5").innerHTML += currencyCount[i] + "<br />";
            }
            else if(notes[i] == 500){
                document.getElementById("demo6").innerHTML += currencyCount[i] + "<br />";
            }
            else if(notes[i] == 2000){
                document.getElementById("demo7").innerHTML += currencyCount[i] + "<br />";
            }
            else{
                console.log("Please enter correct input");
            }
        }
    }
};

submit_button.addEventListener('click', calculate);