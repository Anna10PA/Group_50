// 5)შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"

userInfo = {
    name: 'Ana',
    surname: "Puturidze",
    age: 16,
    hobby: "shootgun",
    
}
for (let i of Object.keys(userInfo)){
    console.log(i +':'+userInfo[i])
}
