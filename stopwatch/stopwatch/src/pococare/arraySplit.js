// ## 1. Array Split Problem

// **Question:**

// Given an array and a limit `k`, write a function that splits the array with `k` elements in each part (or remaining elements for last part) and returns a 2D array containing these parts.

// **Example:**

// - **Input:**
    
//     `arr = [1,2,3,4,5,6,7,8]`
    
//     `k = 3`
    
// - **Output:**
    
//     `[[1,2,3], [4,5,6], [7,8]]`

function arraySplit(arr, k) {
    let mat = [], bag = []
    for(let i=0; i<arr.length; i++) { 
       bag.push(arr[i])
       if(bag.length === k || arr.length-1 == i) {
        mat.push([...bag])
        bag = []
       }
    }
    console.log(mat)
}

let array = [1,2,3,4,5,6,7,8]
let k = 2
arraySplit(array, k)

// o/p: [[1,2,3],[4,5,6],[7,8]]