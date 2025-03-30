// 2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი

let userNumber = Number(prompt("Enter number: "))
let userOperation = prompt("odd, even, square or multiple of three: ")


let counter = 1
if(userOperation === 'odd'){
    counter = 1
}
else if(userOperation === 'even') {
    counter = 2
}
while(counter < userNumber){
    console.log(counter)
    counter += 2
}

if(userOperation === 'multiple of three'){
    let i = 2
}
else if(userOperation === 'square'){
    let i = 3
}
while (counter < userNumber){
    console.log(counter**i)
    counter ++
}

