// 2)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები

let parentElement = document.createElement('div')

parentElement.style.height = '100px'
parentElement.style.width = '100px'
parentElement.style.backgroundColor = 'green'

let childElement = document.createElement('div')
childElement.style.backgroundColor = 'red'
childElement.style.height = '50px'
childElement.style.width = '50px'

document.body.appendChild(parentElement)
parentElement.appendChild(childElement)