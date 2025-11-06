// 2) შექმენით რამოდენიმე  კომპონენტი და ერთმანეთთან გადააგზავნეთ ბევრი სთეითები(რომ გადააგზავნით, როგორ გამოიყენებთ უკვე მიღებულ სთეითებს თქვენს კრეატიულობაზე იყოს) რათქმა უნდა useContextის გამოყენებით

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import FullPage from "./components/FullPage"
import Favorites from "./components/Favorites"
import { SendInfo } from "./components/Card_01"


function App() {
  let [favList, setFavoriteL] = useState([])

  // Task 003
  let clickHeartBtn = (item) => {
    setFavoriteL(favList => {
      let isFavorite = false
      for (let element of favList) {
        if (element.Id === item.Id) {
          isFavorite = true
          break
        }
      }
      if (isFavorite) {
        return favList.filter(
          element => element.Id !== item.Id
        )
      } else {
        return [...favList, item]
      }
    })
  }

  // Task 004
  let infos = {
    favListName: favList,
    func: clickHeartBtn
  }

  return (
    // <FullPage />
    <BrowserRouter>
      <SendInfo.Provider value={infos}>
        <Routes>
          <Route path="/" element={<FullPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </SendInfo.Provider>

    </BrowserRouter>
  )
}

export default App