// 1)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი `car is in {condition} condition` გამოიყენეთ format-ი

const car = {
    company: 'BMW Group',
    model: 'X1 SUV',
    year: 2009,
    milage: 20.37,
    condition: 'Excellent',
    text(Condition){
        console.log(`car is in ${Condition} condition`)
    }
}
console.log(car)