// 'Mini Bank'

import { useReducer } from "react"

function App() {
  let transaction = (state, active) => {

  }
  let [money, setMoney] = useReducer(transaction, {
    amount: 0
  })
  return (
    <main className="flex min-h-screen w-full bg-gray-950 flex-col items-center justify-center text-white gap-[20px]">
      <h1 className="text-[50px]">Welcome</h1>
      <h2 className="text-[30px]">Mini BANK</h2>
      <h3 className="text-[15px]">Amount</h3>
      <form onSubmit={(e)=> {
        e.preventDefault()
        

      }}>
        <div className="flex items-center justify-between gap-[10px]">
          <div>
            <input type="text" placeholder={'Deposit'} name='Deposit' />
            <label className="" ></label>
          </div>
          <div>
            <input type="text" placeholder={'Deposit'} />
            <label className="" ></label>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <button className="bg-black text-white">Submit</button>
          <button type="reset" className="bg-black text-white">Reset</button>
        </div>
      </form>
    </main>
  )
}

export default App
