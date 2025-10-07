const fruits = ['apple', 'kiwi', 'cherry', 'pear'];

const users = [
    { name: 'Anna', skills: [] },
    { name: 'Ivan', skills: [] }
];

const numberArray = [10, 20];

function upperFruits() {
    fruits.forEach(el => {
        const upper = el.toUpperCase();
        console.log('Uppercase fruit: ' + upper);
    });
}

function modifyNumbers(index, val) {
    numberArray[index] = val;
    console.log(numberArray);
}

const anyArray = ['word', 123, true, null];

function getUsersWithSkills(...skills) {
    users.map(user => {
        user.skills = [...skills];
        console.log('A user has got new skills: ', user.skills);
    });
}

function pushTheHorses(...val) {
    anyArray.shift(val);
    anyArray.pop(val);
    anyArray.push(val);
    console.log(anyArray);
}

modifyNumbers(0, 15);
upperFruits();

getUsersWithSkills('Angular', 'Cypress');

pushTheHorses('HorseX', 'HorseY');
