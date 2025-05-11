// 1) შექმენით სარეგიდტრაციო ფორმა და ცხრილი
// ფორმის დადასტურებისას, შეყვანილი მონაცემები უნდა დაემატოს ცხრილში, ახალი რიგის სახით, კომენტარებით ახსენით თითოეული ნაბიჯი


let submitButton = document.querySelector('button')

submitButton.addEventListener('click', function(){
    let input = document.getElementById('email')
    let table = document.querySelector('table')
    let row = document.createElement('tr')
    let Td = document.createElement('td')

    Td.textContent = input.value
    row.appendChild(Td)
    table.appendChild(row)

    input.value
    input.textContent = ''
})