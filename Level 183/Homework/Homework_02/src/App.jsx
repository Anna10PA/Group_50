// Tic Tac Toe თამაში

import { useReducer, useEffect, useRef } from 'react'
import Message from './Message'

// winning combos
function App() {

  let countMatch = useRef()
  let winner = useRef()
  let finishCurrentPart = useRef(false)
  let gif = useRef([
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2k0NnVzY3IxdWZtenVvZXBreGZya2dpYjhjM2JxNWw3ZGppdHRsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kYcmEV2ADLjF3lP0WQ/giphy.gif",
    "https://media1.tenor.com/m/IvuF3rrGm0gAAAAC/jack-jack-bluey.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBxcnlhbDQ5OW1mcGZzbHM2Y3RxaTMydm92cmNocTVmYXo0ZjBxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3NtY188QaxDdC/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Ewd2FybXp6aGxtbHFzOW1kOWYyZTAxYm42YzU2Z25xbGR1eXNhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUQ4rhUZJYiQsas6WD/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDdxd3FiZGs0MTlwdDVuMDV0eXd2aWg2a2N2NDlvNXp6ZDV6bnZxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jxETRYAi2KReel7pqy/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNiZHViNHQ5MDUwMDc4OG9uYmtuYjFjdG56c2p6cmh4dno4amlnMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11TyfGbDbBv4be/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnZudDE3NzY0d3Z5YTUwZzg5bzhyOHlqOTlrczNiZXV4c2NvOWdnbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MW0UdQdIaXXDq/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDJwOTl5cnM0bGNvdTNlNHl6ZmtyNWRlYm95Z2UwcjI0ODI4dHI4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dXKkzAuhCtgvmQSJ68/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmtyYWNnbTAyMzE2MWltZ3NuNGFlamt0aWxsNmthYTc3cXM3MzVsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jp4dchTKX6BzGkZ5DL/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdwcDVpbG41NTJzNWxpY3pmM3p3Z3l3ZHFtdXFubXVkb2txMGp6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GAXXHdS0zXawVLOJLY/giphy.gif",
    'https://media1.tenor.com/m/lMdrfF1oixQAAAAd/dog.gif',
    "https://media1.tenor.com/m/yBFibFNRc0UAAAAC/the-mask-milo.gif",
    "https://media1.tenor.com/m/zRH4nv_aJXQAAAAC/confused-milo-the-dog.gif",
    "https://media1.tenor.com/m/0TjhSJOXvGgAAAAd/the-mask-mask.gif"
  ])

  const winningComb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ]

  // 
  const Players = (state, action) => {
    console.log(action)
    console.log(state)

    let new_combo = (newCombo) => {
      console.log(newCombo)

      for (let combo of winningComb) {
        let match = 0

        for (let i of combo) {
          for (let n of newCombo) {
            if (i === n) {
              match++
              break
            }
          }
        }
        if (match === 3) {
          return true
        }
      }
      return false
    }



    switch (action.curentPlayer) {
      case 'X':
        return {
          O: {
            curent: false,
            combo: [...state.O.combo],
            score: state.O.score
          },

          X: {
            curent: true,
            combo: state.X.combo.includes(action.index)
              ? [...state.X.combo]
              : [...state.X.combo, action.index],
            score: new_combo([...state.X.combo, action.index]) ? state.X.score + 1 : state.X.score
          }
        }
        break

      case 'O':
        return {
          O: {
            curent: true,
            combo: state.O.combo.includes(action.index)
              ? [...state.O.combo]
              : [...state.O.combo, action.index],
            score: new_combo([...state.O.combo, action.index]) ? state.O.score + 1 : state.O.score
          },

          X: {
            curent: false,
            combo: [...state.X.combo],
            score: state.X.score
          }
        }
        break

    }

    switch(action.type) {
      case 'restart':
        return action.infos
        break
      case 'again': 
        return action.infos
        break
    }
  }

  const [curent, setCurent] = useReducer(Players, {
    X: {
      score: 0,
      curent: false,
      combo: []
    },
    O: {
      score: 0,
      curent: true,
      combo: []
    }
  })
  console.log(curent)

  let victorySound = new Audio('/victory.mp3')
  useEffect(() => {
    console.log('WINNER is X')
    winner.current.textContent = curent.X.score ? 'X Won This Play!' : ' '
    victorySound.play()
    finishCurrentPart.current = true
  }, [curent.X.score])

  useEffect(() => {
    console.log('WINNER is O')
    winner.current.textContent = curent.O.score ? 'O Won This Play!' : ' '
    victorySound.play()
    finishCurrentPart.current = true
  }, [curent.O.score])

  // useEffect(() => {
  //   if ((curent.X.combo.length + curent.O.combo.length) > 8) {
  //     winner.current.textContent === 'Tie'
  //   }
  //   console.log('Tie')
  // })


  // table
  let Table = () => {
    let TableN = []
    for (let i = 0; i < 9; i++) {
      TableN.push(i)
    }
    // console.log(TableN)
    return TableN
  }

  return (
    <main className='flex items-center min-h-screen bg-gray-950 justify-around relative duration-200' onClick={() => {
      let audio = new Audio('/click.mp3')
      audio.play()
    }}>
      {/* {finishCurrentPart.current && (curent.X.score || curent.O.score) && winner.current ? <Message info={curent} /> : ''} */}
      <section className='flex items-center justify-center flex-col gap-[30px] font-[Playwrite_CZ] w-[55%]'>
        <h1 className='text-blue-400 text-[50px] font-bold font-[Science_Gothic] text-shadow-[0px_0px_5px]'>
          Tic Tac Toe
        </h1>
        <h2 className='text-white font-[Science_Gothic] text-shadow-[0px_0px_5px_blue]'>Turn: {curent.X.curent ? 'X' : 'O'}</h2>
        <div className='p-[10px] grid grid-cols-3 justify-items-center bg-blue-400 gap-[5px] rounded'>
          {
            Table().map((e, index) =>
            (
              <div key={index} className={`text-white w-[100px] h-[100px] bg-gray-950 flex items-center justify-center ${curent.X.combo.includes(index) ? 'text-[red]' : curent.O.combo.includes(index) ? 'text-[green]' : 'text-gray-900'} font-exstrabold text-shadow-[0px_0px_3px]`} onClick={(e) => {
                console.log(index)
                if (curent.X.curent && !curent.X.combo.includes(index) && !curent.O.combo.includes(index)) {
                  setCurent({ curentPlayer: 'O', index: index })
                } else if (!curent.X.curent && !curent.X.combo.includes(index) && !curent.O.combo.includes(index)) {
                  setCurent({ curentPlayer: 'X', index: index })
                }
              }}
                style={{
                  color: curent.X.combo.includes(index) ? '#0f0' : curent.O.combo.includes(index) ? 'red' : '#031932',
                  fontSize: curent.X.combo.includes(index) || curent.O.combo.includes(index) ? '40px' : '15px'
                }}>
                {curent.X.combo.includes(index) ? 'X' : curent.O.combo.includes(index) ? 'O' : index + 1}
              </div>
            )
            )
          }
        </div>
      </section>
      <section className='w-[45%] flex flex-col gap-[20px]'>
        <h3 ref={winner} className='text-orange-400 h-[20px] font-[Science_Gothic] text-[30px] mb-[20px] text-shadow-[0px_0px_5px]'>
        </h3>
        <div>
          <h2 className='text-blue-400 h-[25px] font-[Science_Gothic] '>X Score: {curent.X.score || 0}</h2>
          <h2 className='text-blue-400 h-[25px] font-[Science_Gothic] '>O Score: {curent.O.score || 0}</h2>
          <h2 ref={countMatch}></h2>
        </div>
        <img src={gif.current[Math.floor(Math.random() * gif.current.length)]} alt="" className='w-full max-w-[500px] h-[270px] object-cover rounded border-[5px] border-blue-500' />
        {console.log(gif)}


        <div className='flex items-center gap-[15px]'>
          <button className='h-[50px] bg-red-500 rounded cursor-pointer text-gray-950 px-[30px] font-[700] duration-200 hover:bg-[#b10000] hover:text-gray-300'
            onClick={() => {
              setCurent(
                {
                  type: 'restart',
                  infos: {
                    X: {
                      score: 0,
                      curent: false,
                      combo: []
                    },
                    O: {
                      score: 0,
                      curent: true,
                      combo: []
                    }
                  }
                })
            }}>Restart</button>
          <button className='h-[50px] bg-orange-500 rounded cursor-pointer text-gray-950 px-[30px] font-[700]'
            onClick={() => {
              setCurent({
                type: 'again',
                infos:{
                X: {
                  score: curent.X.score,
                  curent: false,
                  combo: []
                },
                O: {
                  score: curent.O.score,
                  curent: true,
                  combo: []
                }
              }})
            }}>Again</button>
          <button className='h-[50px] bg-green-500 rounded cursor-pointer text-gray-950 px-[30px] font-[700]'>Info</button>
        </div>
      </section>
      <h1 className='text-gray-900 fixed bottom-[10px] right-[30px] font-[Science_Gothic]'>Made By Ana </h1>
    </main>
  )
}


export default App
