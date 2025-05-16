class Student {
    constructor(id, name, courses) {
        this.id = id
        this.name = name
        this.courses = courses
    }
}

let arr = [1, 2,3 ,3,4,5]
let sum = arr.reduce((acc, num) => {
    return acc + num 
}, 0)

console.log(sum)