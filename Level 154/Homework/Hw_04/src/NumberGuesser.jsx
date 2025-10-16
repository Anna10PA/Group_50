import { useState } from 'react';
import Toast from './Toast'; // assuming you have this component

function NumberGuesser() {
  const [isOpen, setOpen] = useState(false);
  const [result, setRandomNum] = useState(Math.floor(Math.random() * 10) + 1);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = Number(e.target.number.value);

    if (guess === result) {
      setText('You Win!')
    } else if (Math.abs(result - guess) <= 2) {
      setText('You are close!')
    } else {
      setText('Wrong!')
    }

    setOpen(true)
  }

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col bg-gray-950 gap-10'>
      <form
        className='bg-gray-700 flex items-center gap-[15px] px-[15px] py-[5px]'
        onSubmit={handleSubmit}
      >
        <input
          type='number'
          className='focus:outline-none text-white tracking-[2px] font-[700]'
          name='number'
          placeholder='1-10'
        />
        <button
          type='submit'
          className='px-[10px] py-[5px] bg-[#0f0] text-gray-900 font-[700] tracking-[2px] rounded cursor-pointer'
        >
          Submit
        </button>
        <button
          type='button'
          onClick={() => {
            setRandomNum(Math.floor(Math.random() * 10) + 1)
            setText('')
            setOpen(false)
          }}
          className='px-[10px] py-[5px] bg-[#f00] text-gray-950 font-[700] tracking-[2px] rounded cursor-pointer'
        >
          Reset
        </button>
      </form>

      {isOpen && (
        <Toast
          content={text}
          expiresIn={10000}
          colors={{ background: 'rgb(255, 100, 100)', color: 'rgb(166, 0, 62)' }}
          funct={setOpen}
        />
      )}
    </div>
  );
}

export default NumberGuesser
