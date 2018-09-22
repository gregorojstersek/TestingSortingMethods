const sort = (arr, excTimes) => {
    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {
        arr = mergeSort(arr);
    }

    const newTime = new Date();
    // console.log(arr);
    console.log('Merge sort time spend: ', (newTime - oldTime), 'ms');

}

const mergeSort = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;

    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const result = [];
    const lLen = left.length;
    const rLen = right.length;
    let l = 0;
    let r = 0;

    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

module.exports = {
    sort
}