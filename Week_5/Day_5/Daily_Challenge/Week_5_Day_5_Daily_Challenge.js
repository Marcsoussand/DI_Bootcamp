//define the selectors to may fill them

let fromCurrencies = document.getElementById("fromCurrencies");
let toCurrencies = document.getElementById("toCurrencies");
fetchCurrencies();
// Getting all the data from API to put them into the two selectors
async function fetchCurrencies() {
    try {
        const response = await fetch('http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1')
        const currenciesCountries = await response.json();
        var currency = currenciesCountries.currencies;
        console.log(currenciesCountries.currencies);
        for (element in currency) {
            var newCurrency = document.createElement("option");
            newCurrency.setAttribute("value", element);
            newCurrency.setAttribute("id", element);
            newCurrency.innerText = element + " - " + currency[element];
            fromCurrencies.appendChild(newCurrency);
            var newCurrency2 = document.createElement("option");
            newCurrency2.setAttribute("value", element);
            newCurrency2.setAttribute("id", element);
            newCurrency2.innerText = element + " - " + currency[element];
            toCurrencies.appendChild(newCurrency2);
        }
    }
    catch { console.log }
}

let button = document.getElementById("button");
let entry = document.getElementById("entry");
let result = document.getElementById("result");
button.addEventListener('click', convert);

async function convert() {
    try{
    const response2 = await fetch('http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1')
    const currenciesValue = await response2.json();
    const currenciesName = await currenciesValue.quotes;
    let currency1Id = fromCurrencies.selectedIndex;
    let currency1 = fromCurrencies.options[currency1Id].id;
    // console.log(currency1);
    let currency2Id = toCurrencies.selectedIndex;
    let currency2 = toCurrencies.options[currency2Id].id;
    // console.log(currency1Id);
    // console.log(currency2);
    // console.log(currency2Id);
    let amount = entry.value;
    for (element in currenciesName) {
        if (element == "USD" + currency1) {
            op1 = currenciesName[element];
            // console.log(op1);
        }
        else if (element == "USD" + currency2) {
            op2 = currenciesName[element];
            // console.log(op2);
        }
    }
    var finalResult = (amount * op2 / op1) +" "+ currency2;
    result.style.display="block";
    result.textContent = finalResult;  }
    catch {
        result.style.display="block";
        result.textContent = "Try some other parameters";
    }



}


