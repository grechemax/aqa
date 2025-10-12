const dateParam = new Date().toLocaleDateString('uk-UA').replace(/\//g, '.');
const url = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${dateParam}`;

function fetchCurrency() {
    return fetch(url).then(res => res.json());
};

function processFetchedData(data) {
    const exchangeRates = data.exchangeRate;

    exchangeRates.forEach(rate => {
        if (rate.saleRateNB > 55) {
            console.log(`Currency above 50 UAH: ${rate.currency} = ${rate.saleRateNB}`);
        }
    });
}

fetchCurrency()
    .then(processFetchedData)
    .catch(error => console.error('Error fetching data:', error));
