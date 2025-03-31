
let hexColor = '0123456789abcdef'
let resultColor = '#'

let clickButton = document.getElementById('button')
let Color = document.getElementById('Color')

let Main = document.querySelector('main')
clickButton.addEventListener('click', function(){
    for (let num = 0; num < 6; num++){
        let randomIndex = Math.floor(Math.random()*16)
        resultColor = resultColor + hexColor[randomIndex]
    
    }
    // console.log('#'+resultColor)
    Color.textContent = resultColor;
    Color.style.color = resultColor;

    Main.style.backgroundColor = resultColor
    resultColor = '#'

    let myAudio = new Audio('ha ha  - SOUND CHECK BASS _ SoundAdiks Mix.mp3')

    myAudio.play()
})