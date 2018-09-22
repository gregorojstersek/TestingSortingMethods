let arrLength;

const sort = (arr, excTimes) => {
    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {
        arr = heapSort(arr);
    }
    const newTime = new Date();
    // console.log(arr);
    console.log('Heap sort time spend: ', (newTime - oldTime), 'ms');

}

const heapSort = (arr) => {
    arrLength = arr.length;

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
        heapRoot(arr, i);
    }

    for (i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrLength--;
        heapRoot(arr, 0);
    }

    return arr;
}

const heapRoot = (input, i) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < arrLength && input[left] > input[max]) {
        max = left;
    }
    if (right < arrLength && input[right] > input[max]) {
        max = right;
    }
    if (max != i) {
        swap(input, i, max);
        heapRoot(input, max);
    }
}

const swap = (arr, i, j) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = {
    sort
}