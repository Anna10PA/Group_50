// 1) შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// 
let oddArr = []
let evenArr = []

let myFunction = i => {
    if (i % 2 == 0){
        return i
    }
}
let result = myArr.map(myFunction)
console.log(result)
