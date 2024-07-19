const arr = [6, 3, 8, 1, 0, 4, 2, 5, 9, 7];

console.log(arr);
sort(arr);

function sort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++)
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        console.log(arr);
    }
}