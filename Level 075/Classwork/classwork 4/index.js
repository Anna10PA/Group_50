// 4)შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები

userName = prompt("Enter your name: ")
userSurname = prompt("Enter your surname: ")
userAge = Number(prompt("Enter your age: "))
userHobby = prompt("Enter hobby: ")

userInfo = {
    name: userName,
    surname: userSurname,
    age: userAge,
    hobby: userHobby,
    
    great(){
        console.log('Wellcome '+ this.name)
    }
}
console.log(Object.keys(userInfo))
console.log(Object.values(userInfo))