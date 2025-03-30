// 3)შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო

let myArr = ['Goal', 'Oriented', 'academy']
let newArr = []

for (let element of myArr){
    newArr.push(element[0])
}
console.log(newArr)