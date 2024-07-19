arr = [2, 3, 8, 6, 1];

console.log(inversionN2());
console.log(inversionLogN());

function inversionN2(){
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                res.push([arr[i], arr[j]]);
            }
        }
    }
    return res;
}

function inversionnLogN(){
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                res.push([arr[i], arr[j]]);
            }
        }
    }
    return res;
}
