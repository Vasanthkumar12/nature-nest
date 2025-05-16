// ## 2. Two-Pointer Questions

// ### Question 2.1: Two Sum in a Sorted Array

// **Problem:**

// Given a sorted array of integers and a target number, write a function that uses the two-pointer technique to determine if there are two numbers in the array that add up to the target value.

// **Example:**

// - **Input:**
    
//     `arr = [1, 2, 3, 4, 6]`, target = `6`
    
// - **Output:**
    
//     `true` (because `2 + 4 = 6`)

// function isExists(arr, tar) {
//     let i = 0, j = arr.length - 1
//     while(i<j) {
//         if(arr[i] + arr[j] == tar) {
//             return true
//         }
//         else if(arr[i] + arr[j] < tar) {
//             i++
//         }
//         else {
//             j--
//         }
//     }
//     return false
// }

// let arr = [1, 2, 3, 4, 6]
// let tar = 15
// console.log(isExists(arr, tar))

// ### Question 2.2: Pair with Specific Difference

// **Problem:**

// Given a sorted array of integers and a number `diff`, write a function that uses the two-pointer technique to find if there exists a pair of numbers in the array whose difference is exactly equal to `diff`.

// **Example:**

// - **Input:**
    
//     `arr = [1, 3, 5, 7, 9]`, diff = `4`
    
// - **Output:**
    
//     `true` (because `5 - 1 = 4` or `9 - 5 = 4`)

function isExists(arr, tar) {
    let i = 0, j = arr.length - 1
    while(i<j) {
        if(arr[j] - arr[i] == tar) {
            return true
        }
        else if(arr[j] - arr[i] < tar) {
            j--
        }
        else {
            i++
        }
    }
    return false
}

let arr = [1, 2, 3, 4, 6]
let diff = 7
console.log(isExists(arr, diff))