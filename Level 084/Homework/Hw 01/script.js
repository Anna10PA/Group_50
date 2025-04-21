// 1)დღეს ახსნილი მასალის გამოყენებით გააკეთეთ, საიტზე მოძრავი ელემენტი კლავიატურის ისრების საშუალებით, შექმენით ერთი ელემენტი რომლის საიტზე ჰორიზონტალურადაც და ვერტიკალურადაც ამოძრავებას შეძლებთ, ისრების გამოყენებით ,  ასევე დაამატეთ სტილი რათა იყოს ლამაზი და smooth

let ball = document.querySelector('div')

// damtvlelebi
let count = 0
let rotateCard = 0
let borderRadiusCard = 0
let boxShadowCard = 0
let gaseirnebaX = 0
let gaseirnebaY = 0
let scaleCard = 1

document.addEventListener('keydown', function(event){

    let myArr = ['white', 'red', 'darkcyan', 'green', 'blue', 'yellow']
    let newKey = event.key
    console.log(newKey)


    if(newKey ==='o'){
        ball.style.transition = '1s'
        ball.style.backgroundColor = myArr[count % myArr.length]
        count++
    }else if(newKey === '='){        
        ball.style.transition = '1s'
        boxShadowCard = boxShadowCard + 30
        ball.style.boxShadow = `0px 0px ${boxShadowCard}px ${myArr[count % myArr.length]}`
    }else if(newKey === '-'){        
        ball.style.transition = '1s'
        boxShadowCard = boxShadowCard - 30
        ball.style.boxShadow = `0px 0px ${boxShadowCard}px ${myArr[count % myArr.length]}`
    }else if(newKey === 'p'){
        ball.style.transition = '1s'
        borderRadiusCard = borderRadiusCard + 10
        ball.style.borderRadius = `${borderRadiusCard}px`
    }else if(newKey === 'l'){
        ball.style.transition = '1s'
        borderRadiusCard = borderRadiusCard - 10
        ball.style.borderRadius = `${borderRadiusCard}px`
    }
    // datrialeba marjviv
    else if (newKey == 'q'){
        rotateCard = rotateCard + 45
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }else if (newKey == 'w'){
        rotateCard = rotateCard + 90
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }else if (newKey == 'e'){
        rotateCard = rotateCard + 180
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }else if (newKey == 'r'){
        rotateCard = rotateCard + 360
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }

    // datrialeba marcxniv

    else if (newKey == 't'){
        rotateCard = rotateCard - 45
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }else if (newKey == 'y'){
        rotateCard = rotateCard - 90
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }else if (newKey == 'u'){
        rotateCard = rotateCard - 180
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }else if (newKey == 'i'){
        rotateCard = rotateCard - 360
        ball.style.transition = '0.5s'
        ball.style.transform = `rotate(${rotateCard}deg)`
    }
    // gaseirneba

    else if(newKey === 'ArrowRight'){
        gaseirnebaX = gaseirnebaX + 100
        ball.style.transition = '0.5s'
        ball.style.position = `relative`
        ball.style.left = `${gaseirnebaX}px`


    }else if (newKey === 'ArrowLeft'){
        gaseirnebaX = gaseirnebaX - 100
        ball.style.transition = '0.5s'
        ball.style.position = `relative`
        ball.style.left = `${gaseirnebaX}px`

    }else if(newKey === 'ArrowUp'){
        ball.style.transition = '0.5s'
        gaseirnebaY = gaseirnebaY - 50
        ball.style.position = `relative`
        ball.style.top = `${gaseirnebaY}px`
    }else if(newKey === 'ArrowDown'){
        ball.style.transition = '0.5s'
        gaseirnebaY = gaseirnebaY + 50
        ball.style.position = `relative`
        ball.style.top = `${gaseirnebaY}px`
    }
    // gazrda dapataraveba
    else if(newKey === 'k'){
        scaleCard += 1.5
        ball.style.transform = `scale(${scaleCard})`        
    }else if(newKey === 'j'){
        scaleCard -= 1.5
        ball.style.transform = `scale(${scaleCard})`        
    }
})