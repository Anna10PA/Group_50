let idBtn = document.querySelector('#idit')
let all = document.querySelectorAll('button')[2]
let completed = document.querySelectorAll('button')[3]

let result = document.querySelector('.result')
let getData = () => {
    // Task 001
    let http = new XMLHttpRequest() // ვქმნით XMLH ობიექტს და ცვლადში ვინახავთ 
    console.log(http)

    // Task 002
    http.onreadystatechange = function () {
        console.log(this.readyState) // onreadystatechange უნდა შეიცვალოს თუ გვინდა რომ readyState შეიცვალოს. თავიდან 0 არის readyState - ის მნიშვნელობა, რადგან ფუნქცია შექმნილია და არა გამოძახებული. ფუნქცია როდესაც გადავცემთ უკვე 1 გახდება მისი მნიშვნელობა. 

        // Task 003
        if (this.readyState == 4) {     // readyState აქვს 5 მნიშვნელობა. 0, 1, 2, 3, 4. 4 არის კარგი. 
            console.log('Idk Just Test')
            if (this.status == 200) {   // status == 200  საიტი წარმატებით თუა ჩატვირთული 200 მაგას ნიშნავს
                let list = JSON.parse(this.responseText)
                console.log(list)
                all.addEventListener('click', () => {
                    result.innerHTML = ''
                    list.map((item) => {
                        let p = document.createElement('p')
                        p.textContent = item.title
                        if (item.completed) {
                            p.style.color = '#0f0'
                        } else {
                            p.style.color = '#f00'
                        }
                        console.log(item.title)
                        result.innerHTML += item.id + '. ' + p.textContent + '<br>'
                    })
                })
                completed.addEventListener('click', () => {
                    result.innerHTML = ''
                    list.map((item) => {
                        if (item.completed){
                            let p = document.createElement('p')
                            p.textContent = item.title
                            console.log(item.title)
                            result.innerHTML += item.id  + '. ' + p.textContent + '<br>'
                        }
                    })
                })
            }
        }
    }

    http.open('GET', 'https://jsonplaceholder.typicode.com/todos') // მე-4 ეტაპია.
    http.send() // მე-5 ეტაპი ეს აუცილებელია, თორემ მოთხოვნა არ იგზავნება
}

getData()