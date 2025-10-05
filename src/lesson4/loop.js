function simpleLooper(maxBoundary) {
    for (let index = 0; index < maxBoundary; index++) {
        console.log('current index: ' + index);
    }
}

function decrementByTen(number) {
    for (let index = number; index >= 0; index -= 10) {
        console.log('current index: ' + index);
    }
}

simpleLooper(10);
decrementByTen(100);
