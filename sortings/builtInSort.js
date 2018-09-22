const sort = (arr, excTimes) => {

    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {
        arr.sort((a, b) => a - b);
    }
    const newTime = new Date();

    // console.log(arr);
    console.log('Built in sort time spend: ', (newTime - oldTime), 'ms');
}

module.exports = {
    sort
}