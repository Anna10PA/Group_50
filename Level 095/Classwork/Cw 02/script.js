// 2)შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ ამ რიცხვებს გაფილტრავთ და ამოიღებთ მხოლოდ უარყოფით რიცხვებს , შემდეგ ამ სიას გადამაპავთ და თითოეულ ელემენტს გადააქცევთ დადებით რიცხვად

// 
let randomNumbers = [1, -10, -213, 12, -23, -3, -123]
let negativeNumber = number => number < 0
let result1 = randomNumbers.filter(negativeNumber)
console.log(result1)

// 
let positiveNumbers = num => num * -1
let result2 = result1.map(positiveNumbers)
console.log(result2)
