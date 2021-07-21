bill_amount = document.getElementById("bill_amount");

cash_given = document.getElementById("cash_given");

submit_button = document.getElementById("submit_btn");

para = document.getElementById("demo");

function calculate(event){

    var cashToBeGiven = bill_amount.value - cash_given.value;
    console.log(cashToBeGiven); 
    
    para.innerText = cashToBeGiven;
};

submit_button.addEventListener('click', calculate);