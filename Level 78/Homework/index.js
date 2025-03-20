let myImages = 
['https://cdn.britannica.com/96/176196-050-EFC5E6A6/Glock-pistol.jpg', 
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SIG_Pro_by_Augustas_Didzgalvis.jpg/1200px-SIG_Pro_by_Augustas_Didzgalvis.jpg',
'https://www.shop.ge/files/09-2023/ad742650/sig-sauer-p365-pnevmaturi-870434418_large.jpg']

let imageIndex = 0
function change(){

    let result = document.getElementById('image')
    result.innerHTML = ''
    let image = document.createElement('img')

    if(imageIndex < (myImages.length)){
        imageIndex++
    }else{
        imageIndex = 0
    }

    image.src = myImages[imageIndex]
    image.style.width = "350px"
    image.style.height = "235px"
    image.style.borderRadius = '5px'

    result.appendChild(image)
}