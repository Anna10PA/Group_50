let count = 0
let countP = document.getElementById("count")

let button = document.getElementsByTagName('button')


for (let index = 0; index < button.length; index++){

    button[index].addEventListener('click', function(){
        count++
        countP.textContent = count
    })

}
