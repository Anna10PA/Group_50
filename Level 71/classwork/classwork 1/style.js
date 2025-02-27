//   1) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაითვალეთ ერთიდან მომხმარებლსი შემოტანილ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი

let userNumber = Number(prompt("Enter number: "))
let sum = 0
for( let i = 0; i<=userNumber; i = i+2 ){
    sum += i
}
console.log(sum)