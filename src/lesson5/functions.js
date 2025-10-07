function sumArray(arr) {
    let sum = 0;
    for (const item of arr) {
        if (!isNaN(Number(item))) {
            sum += Number(item);
        } else {
            console.warn(`Введено нечислове значення: ${item}`);
        }
    }
    return sum;
}

const numbers = [10, 20, 30];
const strings = ['5', '15', '25'];

const sumNumbers = sumArray(numbers);
const sumStrings = sumArray(strings);

console.log('Сума числового масиву:', sumNumbers);
console.log('Сума рядкового масиву:', sumStrings);
