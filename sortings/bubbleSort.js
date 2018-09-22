const sort = (arr, excTimes) => {
    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {

        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                if (arr[j - 1] > arr[j]) {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }

    }
    const newTime = new Date();
    // console.log(arr);
    console.log('Bubble sort time spend: ', (newTime - oldTime), 'ms');
}

module.exports = {
    sort
}