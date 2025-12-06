/* 
1) გექნებათ სია სადაც იქნება სხვადასხვა პროდუქტების სახელები მოთავსებული, მინიმუმ 100

თქვენი მიზანია გააკეთოთ ფილტრაცია, როდესაც მომხამრებელი ჩაწერს ინფუთში რაიმეს შესაბამისად მიიღოთ სიიდან გაფილტრული მონაცემები ამაში გამოიყენეთ useMemo
*/

import { createContext, useState, useEffect, useMemo } from 'react'
import Header from './Header'
import MainPage from './MainPage'
import Filter from './Filter'

export let Items = createContext([])
export let IsOpen = createContext(null)
export let FilteredList = createContext(null)

function App() {
  let [info, setInfo] = useState([])
  let [open, setOpen] = useState(false)
  let [filtered, setFilter] = useState({
    min_price: 0,
    max_price: 1000000000000,
    id: 0,
    name: ''
  })

  useEffect(() => {
    async function getItems() {
      let data = await fetch('/information.json')
      let result = await data.json()
      console.log(result)
      setInfo(result)
    }
    getItems()
  }, [])

  // console.log(filtered)
  let filteredItems = useMemo(() => {
    if (!info || info.length === 0) return []

    return info.filter(item => {
      if (item.price < filtered.min_price || filtered.max_price < item.price) return false
      if (filtered.name && !item.name.toLowerCase().includes(filtered.name.toLowerCase())) return false
      if (filtered.id && !String(item.id).includes(String(filtered.id))) return false

      return true
    })
  }, [filtered, info])
  // console.log(filteredItems)

  return (
    <>
      <Items.Provider value={{ info, filteredItems }}>
        <IsOpen.Provider value={{ setOpen, open }}>
          <FilteredList.Provider value={{ setFilter, filtered }}>
            <Header />
            <MainPage />
          </FilteredList.Provider>
        </IsOpen.Provider>
      </Items.Provider>
    </>
  )
}

export default App
