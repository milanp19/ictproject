// const ar = [
//     { id: 1, name: "meh" },
//     { id: 2, name: "me" },
//     { id: 3, name: "m" },
// ]

// console.log(ar[1].name)

// const a = ["geldf", 12, 13, 14]

// //insert at front
// a.unshift(1)
// console.log(a)

// //delete at front
// a.shift()
// console.log(a)

// //insert at front
// a.push(2)
// console.log(a)

// //delete at last
// a.pop(1)
// console.log(a)

// const add = (a, b) => {
//     return a + b
// }
// arr = [1, 2, 3]
// console.log("result is: ", add(2, 3))
// // console.log(arr.reduce((a, b) => a + b ))

// const checkMoreThan10 = (a, b) => {
//     const c = a + b > 10 ? "greater than 10" : "less than 10"
//     return c
// }

// console.log(checkMoreThan10(3, 3))

//using for of loop
const dArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(i of dArray){
//     console.log(i)
// }

i = 0
//using while
// while(i < dArray.length){
//     console.log(dArray[i])
//     i++
// }

// using do while
do {
    console.log(dArray[i])
    i++
}while(i < dArray.length)