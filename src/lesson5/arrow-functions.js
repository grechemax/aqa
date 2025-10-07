const sumArray = (arr) =>
    arr.reduce((sum, item) => {
        const num = Number(item);
        return !isNaN(num) ? sum + num : sum;
    }, 0);

const numbers = [10, 20, 30];
const strings = ['5', '15', '25'];

console.log('Сума числового масиву:', sumArray(numbers));
console.log('Сума рядкового масиву:', sumArray(strings));
