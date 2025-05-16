function isPalindrome(num) {
    let n = num
    let newNum = 0
    while(n != 0) {
        let rem = n % 10
        newNum = newNum * 10 + rem
        n = Math.floor(n/10)
    }
    console.log(newNum)

    return num == newNum ? true : false
}

let num = 12121
console.log(isPalindrome(num))