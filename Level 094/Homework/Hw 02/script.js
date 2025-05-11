// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)

let myFullName = ['Ana Puturidze']

// 1
// result = e =>`${e[0][0].toUpperCase()}.${e[1][0].toUpperCase()}`
// console.log(result(myFullName))

// 2
let name = i => {
    let initial = i.split(" ")
    return `${initial[0][0].toUpperCase()}.${initial[1][0].toUpperCase()}`
}
let myList = myFullName.map(name) 
console.log(myList)