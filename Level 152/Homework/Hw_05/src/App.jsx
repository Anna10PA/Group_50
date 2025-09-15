/* 
5) შექმენით Description კომპონენტი.
შექმენით form ერთი textarea და submit ღილაკით, ასევე p ტეგი
--> p ტეგში თავიდან უნდა ეწეროს No Description
--> როცა მომხმარებელი ჩაწერს ტექსტს და დაასაბმითებს ამ p ტეგის მნიშვნელობა უნდა გახდეს `Your Description: {desc}`
*/

import Description from "./Description.jsx"

function App() {
  return (
    <Description />
  )
}

export default App