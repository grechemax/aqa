const numberVar = 10;
const stringVar = "10";
const boolVar = true;
const nullVar = null;
const undefinedVar = undefined;

// Порівняння
console.log("numberVar == stringVar:", numberVar == stringVar);
console.log("numberVar === stringVar:", numberVar === stringVar);
console.log("numberVar > 5:", numberVar > 5);
console.log("nullVar == undefinedVar:", nullVar == undefinedVar);
console.log("nullVar === undefinedVar:", nullVar === undefinedVar);

// Логічні оператори
console.log("boolVar && (numberVar > 5):", boolVar && (numberVar > 5));
console.log("boolVar || (numberVar < 5):", boolVar || (numberVar < 5));
console.log("!boolVar:", !boolVar);
console.log("!(numberVar < 5):", !(numberVar < 5));
