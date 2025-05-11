// num % 2 === 0 ? console.log(`The ${num} is even`) : num === 4 ? console.log(`The num is ${num}`) : console.log(`The ${num} is odd`)

const form = document.querySelector("form");

// const defaultInfo = {
//     email: "blabla@gmail.com",
//     passsword:"123"
// }



form.addEventListener("submit", (e)=>{
    e.preventDefault()

    // const entered = {
    //     email: e.target.email.value,
    //     password: e.target.password.value
    // }
    function constructorObj(email, password){
        this.mail = email
        this.Password = password
    }

    let New = new constructorObj('blabla@gmail.com', '1222223')
    console.log(New)
    const table = document.querySelector("table")
    
    table.innerHTML += `
    <tr>
        <td>${entered.email}</td>
        <td>${entered.password} </td>
    </tr>
    `

})