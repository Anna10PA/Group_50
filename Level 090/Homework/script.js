let count = 0
let countP = document.getElementById("count")

let button = document.getElementsByTagName('button')
let cardDiv = document.getElementsByClassName('card')

let icon = document.getElementById('cart')
let list = document.getElementById('shopList')
let sumPrice = 0

for (let index = 0; index < button.length; index ++){
    button[index].addEventListener('click', function(){
        count++
        countP.textContent = count
        let add = cardDiv[index]
        console.log(add)
        let Clone = add.cloneNode(true)
        let textChange = Clone.querySelector('button')
        let sum = document.getElementById('sum')
        
        textChange.textContent = 'DELETE'
        textChange.style.backgroundColor = 'red'
        list.appendChild(Clone)

        let price = button[index].parentElement.querySelector('.price')
        console.log(price.textContent)

        sumPrice += Number(price.textContent)
        sum.textContent = sumPrice

        console.log(Number(price.textContent))
        textChange.addEventListener('click', function(){
            textChange.parentElement.remove()
            sumPrice -= Number(price.textContent)
            sum.textContent = sumPrice
            
            count--
            countP.textContent = count
            
        })
        
    })
}

let Model = document.getElementById('moon')
let moonModel = false
let seeMoreText = document.getElementById('see')


Model.addEventListener('click', function(){
    if (moonModel == false){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        
        Model.className = 'bx bxs-sun'
    
        for(let card of cardDiv){
            card.style.backgroundColor = 'rgb(200, 200, 200)'
            card.style.color = 'black'
        }
        seeMoreText.style.color = 'black'
        document.getElementById('image').src = 'https://i.pinimg.com/736x/82/77/e8/8277e8f7aebf0b6d0d2db55a3a005764.jpg'

        moonModel = true

    }else if(moonModel == true){


        for(let card of cardDiv){
            card.style.backgroundColor = ' rgba(24, 24, 24, 0.706)'
            card.style.color = 'white'
        }
        document.body.style.backgroundColor = 'black'

        seeMoreText.style.color = 'white'
        document.getElementById('image').src = 'https://i.pinimg.com/736x/7b/e2/75/7be2755b43db666301611bff8e8882cc.jpg'
        Model.className = 'bx bxs-moon'

        moonModel = false

    }
})
let close = document.getElementById('close')

icon.addEventListener('click', function(){
    list.style.right = '1%'  
})
close.addEventListener('click', function(){
    list.style.right = '-100%'
})