// 1)შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ გაფილტრეთ ეს სია და დაამატეთ ახალ სიაში მხოლოდ ის ელემენტები რომლებიც იქნებიან კენტ ინდექსზე და მათი მნიშვნელობაც იქნება კენტი

myArr = [10, 21, 123, 9, 5, 49, 50, 100, 16, 3, 25, 1, 8]
let myFunction = myArr.filter(element => element % 2 == 1)
newArr = []
for (let i  of myArr){
    if (myArr.indexOf(i) % 2 == 1){
        newArr.push(i)
    }
}
console.log(newArr)