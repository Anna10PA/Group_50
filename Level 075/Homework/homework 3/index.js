// 3) შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში

const user = {
    name: 'Ana',
    surname: 'puturidze',
    age: 16,
    height: 1.6,
}
for (let i of Object.keys(userInfo)){
    console.log(i +':'+userInfo[i])
}