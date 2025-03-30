let myImages = ['https://cdn.britannica.com/96/176196-050-EFC5E6A6/Glock-pistol.jpg', 
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SIG_Pro_by_Augustas_Didzgalvis.jpg/1200px-SIG_Pro_by_Augustas_Didzgalvis.jpg', 'https://www.shop.ge/files/09-2023/ad742650/sig-sauer-p365-pnevmaturi-870434418_large.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GghbS6gij4B4TwBn8ejsd9AsmyUe73KWUQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExcHLDgHrpN-7HDNIXlL3yBTZBOWuX6QzECIVHJRnrGYtSwpLZOK96twhxXrujWip9gA&usqp=CAU']

let imageIndex = 0
function change(){

    let result = document.getElementById('image')
    result.innerHTML = ''
    let image = document.createElement('img')

    if(imageIndex < (myImages.length - 1)){
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