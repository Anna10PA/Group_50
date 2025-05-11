// 3)შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან

let myString = ['hello', 'user name', 'Goal Academy', 'HAahahahhaha', 'whaaaaaaat?']
let result = []

myFunction = e => {
    if (e.length > 5){
        result.push(e)
    }
    return result
}

let Result = myString.map(myFunction)
console.log(Result)