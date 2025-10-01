/* 
5) შექმენით TemperatureConverter კომპონენტი
შექმენით: 
-ერთი input ტეგი (type=number)
-ორი ღილაკი ტექსტებით -> '1. Celsius To Fahrenheit' და '2. Fahrenheit To Celsius' 
-p ტეგი სადაც ეწერება -> 'You Have Selected: 1` ან `You Have Selected: 2`
-submit ღილაკი
--> მომხმარებელმა უნდა შემოიყვანოს რიცხვი, ამოირჩიოს გარდაქმნის ტიპი და დააწვეს submit
--> თქვენ უნდა გამოინგარიშოთ და დაარენდეროთ შედეგი

*/
import TemperatureConverter from './TemperatureConverter.jsx'

function App() {
  return (
    <TemperatureConverter />
  )
}

export default App
