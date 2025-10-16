// 4) შექმენით 3 ობიექტი, შემდეგ შექმენით ახალი ობიექტი, სადაც ჩააკოპირებთ სამივე მათგანს.(გამოიყენეთ spread ოპერატორი)

let user01 = {
    name: 'Nini',
    age: 29,
    height: 1.65
}

let user02 = {
    name: 'Gio',
    age: 28,
    height: 1.70
}

let user03 = {
    name: 'Ana',
    age: 16,
    height: 1.62
}


let allUser = {
    ...user01,
    ...user02,
    ...user03
}

console.log(allUser)