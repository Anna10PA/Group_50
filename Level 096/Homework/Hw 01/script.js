// 4) შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე.

let button = document.querySelector('button')

button.addEventListener('click', function(event){
    event.preventDefault()

    let name = document.getElementsByTagName('input')[0].value
    let email = document.getElementsByTagName('input')[1].value
    let password = document.getElementsByTagName('input')[2].value

    let tbody = document.querySelector('tbody')
    tbody.innerHTML += 
    `<tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
    </tr>` 

    name = ''
    email = ''
    password = ''
})