let h1 = document.getElementById('clockId')

function clock(){
    let time = new Date()
    h1.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}

setInterval(time, 1000)
