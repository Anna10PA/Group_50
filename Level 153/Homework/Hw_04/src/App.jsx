/* 
4) შექმენით CharCounter კომპონენტი
შექმენით textarea ტეგი და reset ღილაკი. თქვენი დავალებაა დაითვალოთ შემოყვანილი ტექსტის სიგრძე
--> ყოველ ახალ შემოყვანით სიმბოლოზე ეკრანზე უნდა განახლდეს - `Total Characters: {characterCount}`
--> თუ სიმბოლოების რაოდენობა გაუტოლდება 100 - აღარ მისცეთ მომხმარებელს იმის საშუალება, რომ კიდევ რაიმე დაწეროს, და სადმე დაარენდერეთ `You Reached Character Limit`
--> reset ღილაკზე დაჭერით textarea ში დაწერილი ტექსტი უნდა გასუფთავდეს/წაიშალოს
*/

import CharCounter from "./CharCounter.jsx"

function App() {
  return (
     <CharCounter />
  )
}

export default App
