// Day 93: აუცილებლად გააკეთეთ დღევანდელი პროექტი ყველამ , countdown timer , დაამატეთ სასურველი დიზაინი ლოგიკა და ა.შ.


let result = document.getElementById('clock')

let start = document.getElementById('start')
let sumSeconds = 0
let interval 
function droisGanaxleba(){
    let result = document.querySelector('#clock')

    if (sumSeconds > 0){
        let minute = Math.floor(sumSeconds / 60)
        let seconds = sumSeconds % 60

        if(minute < 10){
            minute = '0' + minute
        }
        if (seconds < 10){
            seconds = '0' + seconds
        }
        result.textContent = minute +':'+seconds
        sumSeconds--
    }


}

start.addEventListener('click', function(){
    let userMin = Number(document.getElementById('mins').value)

    if (userMin === ''){
        alert('None')
    }

    sumSeconds = userMin * 60
    droisGanaxleba()

    interval = setInterval(droisGanaxleba, 1000)
})