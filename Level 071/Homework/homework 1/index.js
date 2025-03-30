// 1)დაწერეთ JavaScript-ის პროგრამა რომელიც დაითვლის სიაში ელემენტების რაოდენობას, შედეგი გამოიტანეთ კონსოლში

let myArr = [10, 16, 5, 'Hello World!', true, 1.62]

// Task 1
let count = 0
for(let element of Arr){
    count ++
}
console.log(count) 

// Task 2
function checkLength(Arr){
    let count = 0
    for(let element of Arr){
        count ++
    }
    return count
}
console.log(checkLength(myArr))
