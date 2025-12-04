import { useState, createContext } from 'react'
import MainPage from './MainPage'

export const ExportInfo = createContext('')

function App() {
  const [info, setInfo] = useState('')

  return (
    <div>
      <ExportInfo.Provider value={{info, setInfo}}>
        <MainPage />
      </ExportInfo.Provider>
    </div>
  )
}

export default App
