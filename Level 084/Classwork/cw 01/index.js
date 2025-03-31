// 1)HTML-ში შექმენით რამდენიმე ელემენტი , შემდეგ  javasCript-იდან გაუწერეთ ისეთი ლოგიკა რომ,რომელ ელემენტსაც დააკლიკებთ ,ამ ელემენტის ტექსტის ფერი გახდეს წითელი ასევე კონსოლში დაბეჭდოს ამ კონკრეტული ელემენტის ინფორმაცია(აუცილებლად გამოიყენეთ დღეს ახსნილი event object)

document.addEventListener('click', function(event){
    console.log(event.target)
    event.target.style.color = 'red'
})