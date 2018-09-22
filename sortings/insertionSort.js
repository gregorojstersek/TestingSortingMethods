const util = require('util');

const sort = (arr, excTimes) => {
    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {

        for (let i = 0; i < arr.length; i++) {
            let value = arr[i]
            for (var j = i - 1; j > -1 && arr[j] > value; j--) {
                arr[j + 1] = arr[j]
            }
            arr[j + 1] = value
        }

    }

    const newTime = new Date();
    // console.log(util.inspect(arr, {
    //     maxArrayLength: null
    // }));
    console.log('Insertion sort time spend: ', (newTime - oldTime), 'ms');

}

module.exports = {
    sort
}