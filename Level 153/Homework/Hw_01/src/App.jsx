/* 
1) შექმენით AgeChecker კომპონენტი
მომხმარებელს მოთხოვეთ თავისი ასაკი, onSubmit ზე:
--> თუ არასრულწლოვანია გამოჩნდეს Toast(ვინც არ იცის დასერჩეთ Toast Ui) ის მსგავსი ელემენტი წითელი Background და ტექსტით - 'You Are Not Allowed`
--> თუ სრულწლოვანია გამოჩნდეს Toast ის მსგავსი ელემენტი მწვანე Background და ტექსტით - `You Are Allowed`
ასევე დაამატეთ reset ღილაკი, რათა მომხმარებელმა შეძლოს თავისი ასაკის ხელახლა შემოყვანა

*/
import AgeChecker from './AgeChecker.jsx'

function App() {
  return (
    <AgeChecker />
  )
}

export default App
