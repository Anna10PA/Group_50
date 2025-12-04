import { useState, createContext } from 'react'
import MainPage from './MainPage'

export const ExportInfo = createContext([])
export const IsOpen = createContext([])

function App() {
  const [info, setInfo] = useState([])
  const [open, setOpen] = useState(false)

  return (
    <div>
      <ExportInfo.Provider value={{ info, setInfo }}>
        <IsOpen.Provider value={{ open, setOpen }}>
          <MainPage />
        </IsOpen.Provider>
      </ExportInfo.Provider>
    </div>
  )
}

export default App
