// keydown - დაჭერა

document.addEventListener('keydown', function(event){
    let keyBorder = event.key
    console.log(keyBorder)
    let myAudio 

    if (keyBorder === 'a'){
        myAudio = new Audio('./audio/kick-bass.mp3')
        myAudio.play()
    }
    else if(keyBorder == 'w'){
        myAudio = new Audio('./audio/crash.mp3')
        myAudio.play()  
    }
    else if(keyBorder == 's'){
        myAudio = new Audio('./audio/snare.mp3')
        myAudio.play()  
    }
    else if(keyBorder == 'd'){
        myAudio = new Audio('./audio/tom-1.mp3')
        myAudio.play()  
    }
    else if(keyBorder == 'j'){
        myAudio = new Audio('./audio/tom-2.mp3')
        myAudio.play()  
    }
    else if(keyBorder == 'k'){
        myAudio = new Audio('./audio/tom-3.mp3')
        myAudio.play()  
    }
    else if(keyBorder == 'l'){
        myAudio = new Audio('./audio/tom-4.mp3')
        myAudio.play()  
    }
} )

document.addEventListener('click', function(event){
    let cardName = event.target.id
    console.log(cardName)
    let myAudio 

    if (cardName === 'kick-bass'){
        myAudio = new Audio('./audio/kick-bass.mp3')
        myAudio.play()
    }
    else if(cardName == 'crash'){
        myAudio = new Audio('./audio/crash.mp3')
        myAudio.play()  
    }
    else if(cardName == 'snare'){
        myAudio = new Audio('./audio/snare.mp3')
        myAudio.play()  
    }
    else if(cardName == 'tom-1'){
        myAudio = new Audio('./audio/tom-1.mp3')
        myAudio.play()  
    }
    else if(cardName == 'tom-2'){
        myAudio = new Audio('./audio/tom-2.mp3')
        myAudio.play()  
    }
    else if(cardName == 'tom-3'){
        myAudio = new Audio('./audio/tom-3.mp3')
        myAudio.play()  
    }
    else if(cardName == 'tom-4'){
        myAudio = new Audio('./audio/tom-4.mp3')
        myAudio.play()  
    }
} )