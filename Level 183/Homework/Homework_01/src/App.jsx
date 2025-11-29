// შექმენით პატარა React აპლიკაცია, რომელიც მართავს ორ გუნდის ქულებს: Team A და Team B.
// ქულების მართვა უნდა მოხდეს useReducer hook-ის გამოყენებით.

import { useReducer } from "react"

function App() {
  let getMarks = (score, action) => {
    switch (action.group) {
      case 'A':
        return { ...score, group_A: score.group_A++ }
        break
      case 'B':
        return { ...score, group_B: score.group_B++ }
        break
      default:
        return { group_A: 0, group_B: 0 }
        break
    }
  }

  let [scores, setScores] = useReducer(getMarks, {
    group_A: 0,
    group_B: 0
  })

  return (
    <div className='min-h-screen bg-gray-950 flex items-center justify-center flex-col gap-[20px]'>
      <h1 className="text-orange-500 font-[800] text-[40px]">{scores.group_A > scores.group_B ? 'Group A is winner ' : scores.group_A === scores.group_B ? 'Tie' : 'Group B is winner'}</h1>
      <div className="text-white flex items-center gap-[40px]">
        <div className="flex flex-col items-center gap-[5px] ">
          <h1 className="text-[25px] font-[700]">Group A</h1>
          <h2 className="text-[35px] font-[800]">{scores.group_A}</h2>
        </div>
        <div className="flex flex-col items-center gap-[5px] ">
          <h1 className="text-[25px] font-[700]">Group B</h1>
          <h2 className="text-[35px] font-[800]">{scores.group_B}</h2>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <button onClick={() => {
          setScores({ group: 'A' })
        }} className="px-[20px] h-[50px] bg-[red] text-white rounded cursor-pointer font-[700] duration-200 hover:bg-[#a00]">A</button>
        <button onClick={() => {
          setScores({ group: '_' })
        }} className="px-[20px] h-[50px] bg-[orange] text-white rounded cursor-pointer font-[700] duration-200 hover:bg-orange-500">reset</button>
        <button onClick={() => {
          setScores({ group: 'B' })
        }} className="px-[20px] h-[50px] bg-[#0a0] text-white rounded cursor-pointer font-[700] duration-200 hover:bg-[green]">B</button>
      </div>
    </div>
  )
}

export default App
