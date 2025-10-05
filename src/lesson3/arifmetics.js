function test(intVariable, stringVariable) {
    const additionRes = intVariable + stringVariable;
    const subtractionRes = intVariable - stringVariable;
    const multiplicationRes = intVariable * stringVariable;
    const divisionRes = intVariable / stringVariable;

    console.log(additionRes);
    console.log(subtractionRes);
    console.log(multiplicationRes);
    console.log(divisionRes);
}
console.log('two integers');
test(2, 3);

console.log('two booleans');
test(true, false);

console.log('integer and string');
test(10, '20');
