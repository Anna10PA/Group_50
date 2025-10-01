/* 
2) შექმენით Username კომპონენტი.
დაარენდერეთ ერთი input და submit ტეგები.
მომხმარებელს მოთხოვეთ შემოიყვანოს თავისი username
--> onSumbit ზე:
თუ input ცარიელია, ამოაგდეთ 1 დავალების შესაბამისი Toast(error)
თუ input შეიცავს ციფრებს და სიმბოლოებს, ამოაგდეთ 1 დავალების შესაბამისი Toast(error)
სხვა შემთქვევაში ამოაგდეთ 1 დავალების შესაბამისი Toast(success)
*/

import Username from './Username.jsx'

function App() {
  return (
    <Username />
  )
}

export default App
