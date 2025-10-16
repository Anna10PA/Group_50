// 3) შექმენით ობიექტი მინიმუმ 3 კუთვნილებით(name, age, height). გამოიყენეთ ამ ობიექტზე დესტრუქცია ისე, რომ name კუთვნილება შეინახოს ცვლადში, ხოლო დანარჩენი კუთვნილებებისგან შეიქმნას ახალი ობიექტი(დაგჭირდებათ rest ოპერატორი)

let myInfo = {
    name: 'Ana',
    age: 16,
    height: 1.62
}

let {name, ...newObj} = myInfo

console.log(name)
console.log(newObj)