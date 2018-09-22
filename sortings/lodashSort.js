const _ = require('lodash');

const sort = (arr, excTimes) => {

    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {
        arr = sortedSmallNumbers = _.sortBy(arr);
    }
    const newTime = new Date();

    // console.log(arr);
    console.log('Lodash sort time spend: ', (newTime - oldTime), 'ms');
}

module.exports = {
    sort
}