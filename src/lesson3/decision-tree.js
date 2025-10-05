function getHeatingLevel(season, temperature) {
    if (temperature < 0) {
        return 'Turn heating on 100%';
    } else if ((season === 'fall' || season === 'winter' || season === 'spring') && temperature < 12) {
        return 'Turn heating on 30%';
    } else {
        return 'Turn heating off';
    }
}

console.log(getHeatingLevel('winter', -5));   // Turn heating on 100%
console.log(getHeatingLevel('fall', 10));   // Turn heating on 30%
console.log(getHeatingLevel('summer', 10)); // Turn heating off
