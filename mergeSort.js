var arr = [...new Array(20)].map(() => { return Math.floor(Math.random(100) * 100) });
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

function mergeSort(arr, start, end) {
    if (start == end)
        return;

    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid); //left
    mergeSort(arr, mid + 1, end); //right
    merge(arr, start, mid, end)
}

function merge(arr, start, mid, end) {
    let leftArr = arr.slice(start, mid + 1), m = leftArr.length;
    let rightArr = arr.slice(mid + 1, end + 1), n = rightArr.length;
    console.log(leftArr);
    console.log(rightArr);
    let i = j = 0, k = start;
    while (i < m && j < n) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        }
        else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    while (i < m) {
        arr[k++] = leftArr[i++];
    }
    while (j < n) {
        arr[k++] = rightArr[j++]
    }
    console.log(arr);
}
function merge1(arr, start, mid, end) {
    let i = start, j = mid + 1, temp;
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {

        }
        else {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        i++;
    }
}