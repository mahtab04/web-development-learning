const currency_one = document.querySelector("#currency-one");
const amount_one = document.querySelector("#amount-one");
const currency_two = document.querySelector("#currency-two");
const amount_two = document.querySelector("#amount-two");

const rateel = document.getElementById("rate");
const swap = document.getElementById("swap");
//Api-key
var _0xd77b = [
  "\x62\x35\x32\x63\x63\x36\x62\x32\x39\x31\x34\x36\x61\x31\x62\x63\x65\x36\x66\x33\x33\x30\x36\x62",
];
const key = _0xd77b[0];
//Fetch Exchange rate and update the dom

function calculate() {
  const currency_1 = currency_one.value;
  const currency_2 = currency_two.value;
  fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency_1}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_2];

      rateel.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;
      amount_two.value = (amount_one.value * rate).toFixed(2);
    });
}

currency_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);

currency_two.addEventListener("change", calculate);
amount_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});
