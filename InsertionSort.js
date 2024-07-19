const arr = [6, 3, 8, 1, 0, 4, 2, 5, 9, 7];
console.log(arr);

// iterativeSearch(arr);
recursiveSort(arr,arr.length-1);

console.log(arr);

function iterativeSort(arr) {
    for (i = 1; i < arr.length; i++) {
        temp = arr[i];
        for (j = i - 1; arr[j] > temp; j--)   //try binary search
            arr[j + 1] = arr[j];
        arr[j + 1] = temp;
    }
}

function recursiveSort(arr,n){
    if(n===0)
        return;
    recursiveSort(arr,n-1);
    let temp=arr[n],i=n-1;
    while(arr[i]>temp){
        arr[i+1]=arr[i];
        i--;
    }
    arr[i+1]=temp;
    console.log(arr);
}
