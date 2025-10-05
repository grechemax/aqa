// switch.js

function buyStock(ticker) {
    switch (ticker) {
        case 'AAPL':
            console.log('You bought Apple stock 🍎');
            break;
        case 'GOOGL':
            console.log('You bought Google stock 🔍');
            break;
        case 'TSLA':
            console.log('You bought Tesla stock 🚗');
            break;
        default:
            console.log('Unknown ticker. Please choose a valid stock.');
            break;
    }
}

buyStock('AAPL');   // You bought Apple stock 🍎
buyStock('TSLA');   // You bought Tesla stock 🚗
buyStock('XYZ');    // Unknown ticker. Please choose a valid stock.
