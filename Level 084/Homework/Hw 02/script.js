let loveCount = 60
let loveButton = document.getElementById('heart')

loveButton.addEventListener('click', function(){
    if (loveButton.style.color == 'red'){
        loveCount--
        loveButton.style.color = 'white'
    }else{
        loveCount++
        loveButton.style.color = 'red'
    }

    document.getElementById('count1').innerHTML = loveCount

})

let commentCount = 20
let Comment = document.getElementById('message')
let commentInput = ducument.getElementById('textChat')

Comment.addEventListener('click', function(){
    commentCount++
    Comment.style.color = 'blue'
    // commentInput.style.display =  'block'
    document.getElementById('count2').innerHTML = commentCount
})