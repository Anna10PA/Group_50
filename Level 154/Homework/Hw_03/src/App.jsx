/* 
3) შექმენით FontSizeAdjuster კომპონენტი.
გამოაჩინეთ ერთი input, submit და p ტეგი რაიმე ტექსტით
--> input ტეგში მომხმარებელმა უნდა შემოიყვანოს რიცხბი 10 დან 100 ჩათვლით
--> თქვენ კი p ტეგს უნდა შეუცვალოთ fontSize
--> თუ მომხმარებლის მიერ შემოყვანილი რიხვი არ არის 10-100 შუალედში მაშინ ამოაგდეთ 1 დავალების შესაბამისი Toast 
Bonus დაამატეთ reset ღილაკი
*/

import FontSizeAdjuster from "./FontSizeAdjuster"

function App() {
  return (<FontSizeAdjuster />)
}

export default App
