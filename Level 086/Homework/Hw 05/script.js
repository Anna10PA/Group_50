let userButton = document.getElementById("btn")
let result = document.getElementById('result')

userButton.addEventListener('click', function(){
    let userNumber = document.getElementById('num').value
    switch(userNumber){
        case '6':
            result.textContent = 'You Won'
        default:
            result.textContent = 'Try AGAIN'
    }
})