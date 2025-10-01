/* 
// 4) შექმენით Register კომპონენტი
// შექმენით 3 input ტეგი: name, password, confirm password და submit
// გააკონტროლეთ სამივე ინფუთის მნიშვნელობა ერთი state გამოყენებით.
// --> name input ის ქვეშ გამოაჩინეთ წითელი მესიჯი 'name must have at least 10 chars' მანამ სანამ მომხმარებლის სახელი არ შეიცავს მინიმუმ 10 სიმბოლოს
// onSubmit ზე:
// --> თუ პაროლები არ უდრის ერთმანეთს ამოაგდეთ შესაბამისი Toast(error)
// --> სხვა შემთხვევაში ამოაგდეთ Toast(success) და უთხარით რომ იგი წარმატებით დარეგისტრირდა

// 5) გააკეთეთ NumberGuesser კომპონენტი. პირობა წერია ზემოთ
*/
import Register from "./Register.jsx"

function App() {
  return (
    <Register />
  )
}

export default App
