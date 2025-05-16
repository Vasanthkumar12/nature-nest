function is_sum_of_2_eles_equal_to_K(arr, k) {
    arr = arr.sort((a,b) => a-b)

    let i=0, j=arr.length-1

    while(i<j) {
        let sum = arr[i] + arr[j]
        if(sum == k) {
            return true
        }
        else if(sum < k) {
            i++
        }
        else {
            j--
        }
    }
    return false
}

let arr = [2, 3, 4, 6, 8]
let k = 14

console.log(is_sum_of_2_eles_equal_to_K(arr, k))