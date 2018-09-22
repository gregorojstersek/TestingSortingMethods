const yargs = require('yargs');

const generator = require('./generator.js');

const bubbleSort = require('./sortings/bubbleSort.js');
const selectionSort = require('./sortings/selectionSort.js');
const insertionSort = require('./sortings/insertionSort.js');
const mergeSort = require('./sortings/mergeSort.js');
const quickSort = require('./sortings/quickSort.js');
const heapSort = require('./sortings/heapSort.js');

const builtInSort = require('./sortings/builtInSort.js');
const lodashSort = require('./sortings/lodashSort.js');

const argv = yargs
    .options({
        t: {
            demand: true,
            alias: 'test',
            describe: 'Which test you want to execute (a or b).'
        },
        et: {
            demand: true,
            alias: 'excTimes',
            describe: 'How many times you want to execute the sort functions.',
            number: true
        },
        al: {
            demand: true,
            alias: 'arrayLength',
            describe: 'How many items you want in the array?',
            number: true
        },
        from: {
            demand: true,
            alias: 'from',
            describe: 'Specify the from number where random number is created.',
            number: true
        },
        to: {
            demand: true,
            alias: 'to',
            describe: 'Specify the to number where random number is created.',
            number: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// which test you want to execute
const test = argv.t;

// get the number how many times the user wants to execute the sort functions
const excTimes = argv.et;

// get the number what should the generated array length be
const arrayLength = argv.al;

// get the from number for creating a random number
const from = argv.from;

// get the to number for creating a random number
const to = argv.to;

if (test === 'a') {

    const generatedNumbers = generator.generateNumbers(arrayLength);
    // custom sorting algorithms
    bubbleSort.sort(generatedNumbers.slice(), excTimes);
    selectionSort.sort(generatedNumbers.slice(), excTimes);
    insertionSort.sort(generatedNumbers.slice(), excTimes);
    quickSort.sort(generatedNumbers.slice(), excTimes);
    heapSort.sort(generatedNumbers.slice(), excTimes);
    mergeSort.sort(generatedNumbers.slice(), excTimes);

    // what we normally use
    builtInSort.sort(generatedNumbers.slice(), excTimes);
    lodashSort.sort(generatedNumbers.slice(), excTimes);

} else if (test === 'b') {
    const generatedPowers = generator.generatePowers(arrayLength, from, to);
    // console.log(generatedPowers);

    // custom sorting algorithms
    bubbleSort.sort(generatedPowers.slice(), excTimes);
    selectionSort.sort(generatedPowers.slice(), excTimes);
    insertionSort.sort(generatedPowers.slice(), excTimes);
    quickSort.sort(generatedPowers.slice(), excTimes);
    heapSort.sort(generatedPowers.slice(), excTimes);
    mergeSort.sort(generatedPowers.slice(), excTimes);

    // // what we normally use
    builtInSort.sort(generatedPowers.slice(), excTimes);
    lodashSort.sort(generatedPowers.slice(), excTimes);

}