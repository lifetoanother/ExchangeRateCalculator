const currencyEL_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update DOM
function calculate() {
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} =  ${rate} ${currency_two}`;

        amountEL_two.value = (amount_ELone.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEL_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEL_two.addEventListener('change', calculate);
amountEL_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
  });
  

calculate();

