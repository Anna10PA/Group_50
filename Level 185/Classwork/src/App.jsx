/*    1) შექმენით კომპონენტი სადაც იქნება შვილი ელემენტი, შვილ ელემენტში იქნება ღილაკი რომელზე დაჭერისას გამოიძახება ის ფუნქცია რომელსაც მიიღებს props ად, და გაზრდის state ს, თქვენი მიზანია გააკეთოთ ისე რომ მშობელი კომპონენტის რენდერმა არგამოიწვიოს ზედმეტი შვილი ელემენტის რენდერი მაშინ როცა არარის საჭირო
*/

import Child from "./Child"
import { useCallback, useState } from "react"

function App() {
  const [itemm, setItem] = useState(0)

  const hello = useCallback(()=> {
    setItem(prev => {
      console.log(prev)
      return prev + 1
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-950">
      <Child onClick={hello} />
    </div>
  )
}

export default App



