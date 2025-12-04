import React from 'react'

let Card = React.memo(({ img, name, rank, year, actors, addFav, heart }) => {

    return (
        <div className='rounded-[10px] rounded-tr-[5px] h-[400px] w-full relative duration-100 group  overflow-hidden font-[Lilita_One] border-[6px] border-[rgba(0,0,0,0.2)]'>
            <img src={img || 'https://i.pinimg.com/1200x/8f/62/e2/8f62e20af1d236dc2eb4473d71b31137.jpg'} alt="hi" className='object-cover w-full h-full duration-100 ' />
            <div className='w-full h-full backdrop-sepia-20 absolute top-0'></div>
            <div className='group-hover:h-[100%] bg-[rgba(0,0,0,0.85)] h-0 w-[100%] absolute bottom-0  duration-300 overflow-hidden flex items-end bg-linear-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] group-hover:py-[30px] backdrop-sepia-50 '>
                <div className='px-[25px]  min-h-[200px] flex items-start flex-col gap-[8px] py-[15px] w-full'>
                    <h1 className={`text-white text-[25px] font-[800] tracking-[1.5px] leading-[30px] text-center mb-[10px] `}>{name}</h1>
                    <h2 className='text-[white]'>{year || 'Year Not Found'}</h2>
                    <h2 className='text-white'>Rank: <span className='text-yellow-400'>{rank}</span>
                    </h2>
                    <h3 className='text-gray-500'>Actors: <br /> {actors}</h3>
                    <div className='flex items-center justify-between w-full mt-[20px]'>
                        <button className='px-[20px] border-[2px] text-yellow-500 tracking-[1px] border-yellow-500 rounded cursor-pointer h-[35px]'>Detail</button>
                        <button className='px-[20px] bg-yellow-500 rounded cursor-pointer h-[35px]'>Watch</button>
                        <i className={`fa-solid fa-heart text-[30px] absolute top-[20px] right-[20px] cursor-pointer ${heart ? 'text-[red]' : 'text-white'} active:scale-[0.8] duration-100`} onClick={addFav}></i>

                    </div>
                </div>
            </div>
        </div>
    )
})

export default Card
