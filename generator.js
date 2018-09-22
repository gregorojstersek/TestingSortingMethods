const generateNumbers = (numbersCount, from, to) => {
    const smallNumbers = [];
    for (let i = 0; i < numbersCount; i++) {
        // push the number between from and to
        smallNumbers.push(generateRandomNumber(from, to));
    }
    return smallNumbers;
}

const generatePowers = (powersCount, from, to) => {
    const powers = [];
    for (let i = 0; i < powersCount; i++) {
        powers.push(generateRandomNumber(from, to) ** generateRandomNumber(from, to));
    }
    return powers;
}

const generateRandomNumber = (from, to) => {
    return Math.floor(Math.random() * to) + from;
}
module.exports = {
    generateNumbers,
    generatePowers
}