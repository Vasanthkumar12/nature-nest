function secondLargest(arr) {
    let fst = -Infinity
    let scd = -Infinity

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > fst) {
            scd = fst
            fst = arr[i]
        }
        else if(arr[i] < fst && arr[i] > scd) {
            scd = arr[i]
        }
    }
    console.log(fst, scd)
}

let arr = [4, 2, 6, 9, 3, 7]
secondLargest(arr)
