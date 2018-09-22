const sort = (arr, excTimes) => {
    const oldTime = new Date();
    for (let x = 0; x < excTimes; x++) {
        arr = quickSort(arr, 0, arr.length - 1);
    }

    const newTime = new Date();
    // console.log(arr);
    console.log('Quick sort time spend: ', (newTime - oldTime), 'ms');

}

const quickSort = (arr, left, right) => {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

const partition = (arr, pivot, left, right) => {
    const pivotValue = arr[pivot];
    let partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

const swap = (arr, i, j) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = {
    sort
}