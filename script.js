/*
When the button is clicked
1. Get the bill amount from the page
2. Get the tip percentage from the page
3. Check that both values are valid
4. Calculate the tip amount
5. Calculate the total bill
6. Show the results on the page
7. Show a helpful message if something is wrong
*/


const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const calculateButton = document.getElementById('calculate');
const tipResult = document.getElementById('tip-result');
const totalResult = document.getElementById('total-result');
const message = document.getElementById('message');


calculateButton.addEventListener("click", function () {
   const billValue = Number(billInput.value);
   const tipValue = Number(tipInput.value);

   if (billValue <= 0 || tipValue <= 0) {
    tipResult.textContent = "Tip amount: N/A";
    totalResult.textContent = "Total bill: N/A";
    message.textContent = "Please enter a bill and tip percentage greater than 0";
    return;
   }

   const tipAmount = billValue * tipValue / 100;
   const totalAmount = billValue + tipAmount;

   tipResult.textContent = "Tip amount: €" + tipAmount.toFixed(2);
   totalResult.textContent = "Total bill: €" + totalAmount.toFixed(2);
    message.textContent = "";
   });
