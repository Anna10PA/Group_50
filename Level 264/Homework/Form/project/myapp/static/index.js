// add post.html
let post = document.querySelectorAll('input')[1]
let img = document.querySelector('#image')

post.addEventListener('change', (e) => {
    let image = e.target.files[0]
    let imgUrl = URL.createObjectURL(image)
    img.src = imgUrl
})


// 
let editProfile = document.querySelector('#file')
let profileImgEditForm = document.querySelector('#form')
let profilePic = document.querySelector('img')

editProfile.addEventListener('change', (e) => {
    let image = e.target.files[0]
    if (image) {
        let imgUrl = URL.createObjectURL(image)
        profilePic.src = imgUrl
    }
})