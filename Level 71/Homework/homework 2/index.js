// 2)for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები

let myArr = [20, 123, 423, 21, 4, 10, 29.5, 120]

let min = myArr[0]
let max = myArr[0]

for(let element of myArr){
    if (element > max){
        max = element
    }

    if (element < min){
        min = element
    }
}
console.log("min number is "+ min)
console.log('max number is ' + max)