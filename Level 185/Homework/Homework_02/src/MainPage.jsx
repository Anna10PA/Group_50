import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { ExportInfo } from './App'
import Card from './Card'

function MainPage() {
    const { setInfo } = useContext(ExportInfo)
    const [render, setRender] = useState([])

    useEffect(() => {
        async function getInfo() {
            try {
                let data = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=garfild')
                let result = await data.json()
                console.log(result)
                setInfo(result)
                setRender(result)
                return result
            } catch (e) {
                console.log(e)
                setInfo([])
            }

        }
        getInfo()
    }, [setInfo])

    return (
        <div className='min-h-screen bg-linear-to-bl from-[rgb(10,35,50)] to-[black] px-[30px] py-[20px] '>
            <header className='backdrop-blur-[10px] w-full py-[15px] border border-none rounded-[10px] bg-[rgba(0,0,5,0.4)] text-white px-[30px] flex items-center font-[Lilita_One] '>
                <div className='h-[max-content] relative w-[65px]  '>
                    <h1>Movie</h1>
                    <i className="fa-solid fa-star absolute top-0 text-yellow-300 right-0"></i>
                    <div className='relative flex items-end gap-[6px]'>
                        <i className="fa-solid fa-star text-yellow-300 text-[18px]"></i>
                        <h2>Night</h2>
                    </div>

                </div>
                <nav className='w-full flex items-center gap-[50px] justify-center'>
                    {/* <ul className='flex items-center justify-start gap-[30px] text-[20px] w-[max-content] max-w-[500px] '>
                        <li>Home</li>
                        <li>Colection</li>
                        <li>Contact</li>
                    </ul> */}
                </nav>
                <div className='flex items-center gap-[15px] text-[20px]'>
                    <i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={() => {

                    }}></i>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-heart"></i>
                </div>
            </header>
            {/* <div className='absolute z-5'>
                <div className='backdrop-blur-[2px] bg-[rgba(10,10,20,0.8)] text-white'>
                    <input type="text" className='w-full outline-none peer' />
                    <label className='peer-focus:'>Search</label>
                </div>
            </div> */}
            <main>
                <section>
                    <div>
                    </div>
                </section>
                <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-[20px] mt-[30px]'>
                    {/* {
                        [render.description].map((item, index)=> {
                            console.log(item)
                        })
                    } */}
                    {
                        render ? [render.description].map((item, index) => {
                            return item ? item.map((e, i) => {
                                // console.log(e)
                                return <Card
                                    key={i}
                                    name={e['#TITLE']}
                                    img={e['#IMG_POSTER']}
                                    rank={e['#RANK']}
                                    year={e['#YEAR']}
                                    actors={e['#ACTORS']}
                                />
                            }) : null
                        }) : null
                    }
                </section>
            </main>
        </div>
    )
}

export default MainPage
