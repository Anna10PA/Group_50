/* 
6) შექმენით Mood კომპონენტი
მომხმარებელს მოთხოვეთ შემოიყვანოს, თუ როგორ ხასიათზეა
--> თუ happy მაშინ დაარენდერეთ `Your Mood: 😀`
--> თუ sad მაშინ დაარენდერეთ `Your Mood: 🙁`
--> თუ scared მაშინ დაარენდერეთ `Your Mood: 😰`
--> თუ angryმაშინ დაარენდერეთ `Your Mood: 😡`
ყველა სხვა შემთხვევაში 'Your Mood: Unknown🤷‍♂️`
*/

import Mood from "./Mood"

function App() {
  return (
    <Mood />
  )
}

export default App
