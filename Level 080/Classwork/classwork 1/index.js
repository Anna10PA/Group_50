// 1) საიტზე დაამატეთ ტექსტი. გაუწერეთ მას Javascript-ის კოდი ისე, რომ ტექსტზე დაჭერისას შეიცვალოს იგი და ეკრანზე მის ნაცვლად გამოვიდეს ახალი წინადადება;

let myText = document.getElementById('h1')

function changeColor(){
    myText.style.color = 'red'
    myText.textContent = 'My name is Ana'
}
myText.addEventListener('click', changeColor)