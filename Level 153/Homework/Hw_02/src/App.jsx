/* 
2) შექმენით ColorPicker კომპონენტი
მომხმარებელს მოთხოვეთ შემოიყვანოს რაიმე ფერი HEX სისტემაში. onSubmit ზე:
--> შეღებეთ ვებსაიტის(ან რაიმე div) Background ფერი, მომხმარებლის მიერ შემოყვანილ HEX კოდით.
--> დაარენდერეთ მსგავსი ტექსტი: `You selected: {hex}`
--> დაამატეთ randomColor ღილაკი
*/

import ColorPicker from "./ColorPicker.jsx"

function App() {
  return (
    <ColorPicker />
  )
}

export default App
