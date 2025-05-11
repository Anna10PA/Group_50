// 2)შექმენით სია სადაც გექნებათ 5 ობიექტი , ამ ობიექტებში შეინახავთ მომხმარებლის სახელს და ასაკს , თქვენი დავალებაა გაფილტროთ ეს სია და დატობოთ მხოლოდ იმ მომხმარებლის ობიექტები ვისი ასაკიც მეტი ან ტოლი იქნება 18 ზე


myArr = [
    user1 = {
        name: 'Ana',
        lastname: 'Puturidze',
        age: 16
    },
    user2 = {
        name: 'Gio',
        lastname: 'Puturidze',
        age: 28
    },
    user3 = {
        name: 'Nini',
        lastname: 'Puturidze',
        age: 29
    },
    user4 = {
        name: 'Niko',
        lastname: 'Absesadze',
        age: 11,
    },
    user5 = {
        name: 'Saba',
        lastname: 'Puturidze',
        age: 5
    }
]
let myFunction = myArr.filter(element => element.age >= 18)
console.log(myFunction)