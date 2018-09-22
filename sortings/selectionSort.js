const sort = (arr, excTimes) => {
    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {

        let minIdx;
        let temp;
        const len = arr.length;

        for (let i = 0; i < len; i++) {
            minIdx = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    const newTime = new Date();
    // console.log(arr);
    console.log('Selection sort time spend: ', (newTime - oldTime), 'ms');

}

module.exports = {
    sort
}