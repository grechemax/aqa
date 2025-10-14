const url = `https://api.privatbank.ua/p24api/pubinfo`;

async function getCurrency(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}


(async () => {
    const data = await getCurrency(url);
    console.log(data);
})();
