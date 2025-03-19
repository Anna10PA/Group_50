// Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"

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
console.log(userInfo)