// 3)შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ სტუდენტის სახელები

let studentInfo = [
    student1 = {
        name: 'jumbera',
        lastname: 'jumberadze',
        score: [100, 90, 95]
    },
    studens2 = {
        name: 'svarchika mayvala',
        lastname: 'mayvalashvili',
        score: [80, 90, 100]
    },
    student3 = {
        name: 'kokrowina',
        lastname: 'kokrowinashvili',
        score: [10, 75, 70]
    }
]
let sashvalo = element => {
    let sum = 0
    for (let i of element){
        sum += i
    }
    element.score = sum
}
console.log(studentInfo)
let sashvalosGamotvla = studentInfo.filter(element => element.score > 90)
console.log(sashvalosGamotvla)