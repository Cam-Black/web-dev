const sum = (...myNumbers) => {
    let result = myNumbers.reduce((acc, next) => acc + next, 0);
    return result;
}

console.log(sum(10, 20, 30));