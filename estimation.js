const yargs = require('yargs');

const argv = yargs
    .options({
        x1: {
            demand: true,
            alias: 'x1',
            describe: '10^6 average time'
        },
        x2: {
            demand: true,
            alias: 'x2',
            describe: '10^7 average time',
            number: true
        },
        x3: {
            demand: true,
            alias: 'x3',
            describe: '10^7 average time',
            number: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const x1 = argv.x1;
const x2 = argv.x2;
const x3 = argv.x3;

const ratio1 = x2 / x1;
const ratio2 = x3 / x2;

const ratio3 = ratio2 + (ratio2 - ratio1) / 2;
const ratio4 = ratio3 + (ratio3 - ratio2) / 2;

const x4 = x3 * ratio3;

const x5 = x4 * ratio4;

// console.log('ratio1', ratio1);
// console.log('ratio2', ratio2);
// console.log('ratio3', ratio3);
// console.log('ratio4', ratio4);
console.log('x4', x4);
console.log('x5', x5);