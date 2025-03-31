// 3) საიტზე დაამატეთ ერთი ფოტო. მასზე დაჭერის შედეგად უნდა იცვლებოდეს იგი მეორე ფოტოთი, ხოლო მეორე ფოტოზე მაუსის გადატარების შემთხვევაში ისიც უნდა ჩანაცვლდეს ამჯერად კიდევ განსხვავებული მესამე ფოტოთი. მესამე ფოტოზე კიდევ ერთხელ დაჭერა უნდა იწევევდეს თავდაპირველი ფოტოს დაბრუნებას

let image = document.querySelector('img')


image.addEventListener('mouseover', function(){
    image.src = 'https://i.pinimg.com/736x/ed/17/9a/ed179a6dc515a9e4fa48b153cd2e6037.jpg'
})
image.querySelector('click', function(){
    image.src = 'https://i.pinimg.com/736x/17/36/d4/1736d410a13bef047dc38b15c0fac2c8.jpg'
})