// 2) საიტზე დაამატეთ 3 ფოტო, რომლებსაც გაცენტრავთ და დიზაინის მხრივ დახვეწავთ. საიტზე მოცემული სამი ფოტოდან პირველი ორის შემთხვევაში მათზე მაუსის გადატარებისას შეიცვალოს ეს ფოტოები და კურსორის გაწევის შედეგად ისევ დაუბრუნდეს თავდაპირველ ფოტოს, ხოლო მესამე ფოტო დაჭერის შედეგად ჩაანაცვლეთ სხვა ფოტოთი, ამ შემთხვევაშიც უნდა უბრუნდებოდეს საწყის ფოტოს კურსორის გაწევის შემდეგ;


// image 1

let image1 = document.getElementById('img1')

image1.addEventListener('mouseover', function(){
    image1.src = 'https://i.pinimg.com/736x/64/61/12/6461126f6411e256d764dd69697add14.jpg'
})
image1.addEventListener('mouseout', function(){
    image1.src = 'https://i.pinimg.com/736x/0c/0b/f7/0c0bf7d2354f5e08f41c2d53e5b0cf0d.jpg'   
})

// image 2
let image2 = document.getElementById('img2')

image2.addEventListener('mouseover', function(){
    image2.src = 'https://i.pinimg.com/736x/64/61/12/6461126f6411e256d764dd69697add14.jpg'
})
image2.addEventListener('mouseout', function(){
    image2.src = 'https://i.pinimg.com/736x/ad/ff/49/adff49383c0a513f68091889ec7ae2c5.jpg'   
})

// image 3
let image3 = document.getElementById('img3')

image3.addEventListener('mouseover', function(){
    image3.src = 'https://i.pinimg.com/736x/64/61/12/6461126f6411e256d764dd69697add14.jpg'
})
image3.addEventListener('mouseout', function(){
    image3.src = 'https://i.pinimg.com/736x/ad/ff/49/adff49383c0a513f68091889ec7ae2c5.jpg'   
})