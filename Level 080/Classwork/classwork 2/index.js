// 2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.

let img = document.getElementById('image')
img.style.width = '400px'

img.addEventListener('mouseover', function(){
    img.src = 'https://i.pinimg.com/736x/cd/af/98/cdaf98bd7b37e3ed07f347d947f4be78.jpg';
})
img.addEventListener('mouseleave', function(){
    img.src = 'https://i.pinimg.com/736x/80/df/33/80df33896f15919af7124cf9a688c78a.jpg';
})