import { useEffect, useContext, useState, useCallback } from 'react'
import { ExportInfo } from './App'
import { IsOpen } from './App'
import Card from './Card'
import Favorite from './Favorite'

function MainPage() {
    const { setInfo } = useContext(ExportInfo)
    const { open, setOpen } = useContext(IsOpen)
    const [render, setRender] = useState([])
    const [serach, setSearch] = useState('')
    const [favorite, setFavorite] = useState([])

    let Fav = useCallback((id) => {
        setFavorite((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id)
                : [...prev, id]
        )
    }, [])
    // #IMDB_ID

    useEffect(() => {
        async function getInfo() {
            try {
                if (serach.trim() === '') return 'Not Fount'
                let data = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${serach}`)
                let result = await data.json()
                console.log('Found item:', result)
                setInfo(result)
                setRender(result)
            } catch (e) {
                console.error('Error Message:', e)
                setInfo([])
            }
        }
        getInfo()
    }, [serach])

    useEffect(() => {
        console.log('favorite item List:', favorite)
    }, [favorite])



    return (
        <div className='min-h-screen bg-linear-to-bl from-[rgb(10,35,50)] to-[black] px-[30px] py-[20px] '>
            <header className='backdrop-blur-[10px] w-ful flex items-center justify-between l py-[15px] border border-none rounded-[10px] bg-[rgba(0,0,5,0.4)] text-white px-[30px] font-[Lilita_One] '>
                <div className='h-[max-content] relative w-[65px]  '>
                    <h1>Movie</h1>
                    <i className="fa-solid fa-star absolute top-0 text-yellow-300 right-0"></i>
                    <div className='relative flex items-end gap-[6px]'>
                        <i className="fa-solid fa-star text-yellow-300 text-[18px]"></i>
                        <h2>Night</h2>
                    </div>

                </div>
                <nav className='w-full flex items-center gap-[50px] justify-center relative bg-[rgba(0,0,0,0.2)] max-w-[400px] h-[40px]'>
                    <input type="text" className=' text-white outline-0 w-full pl-[30px]' placeholder='. . . ' onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                    <i className="fa-solid fa-magnifying-glass cursor-pointer absolute right-[30px]"></i>
                </nav>
                <div className='flex items-center gap-[15px] text-[20px]'>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-heart cursor-pointer duration-100 hover:text-red-500" onClick={() => {
                       setOpen(!open)
                    }}></i>
                </div>
            </header>

            <main className='flex items-start gap-[30px]'>
                <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-[20px] mt-[30px] w-full'>
                    {
                        render.description?.length > 0 ? (
                            render.description.map((e, i) => (
                                <Card
                                    key={i}
                                    name={e['#TITLE']}
                                    img={e['#IMG_POSTER']}
                                    rank={e['#RANK']}
                                    year={e['#YEAR']}
                                    actors={e['#ACTORS']}
                                    addFav={() => {
                                        Fav(e['#IMDB_ID'])
                                    }}
                                    heart={favorite.includes(e['#IMDB_ID'])}
                                />
                            ))
                        ) : (
                            <h1 className='text-white text-[30px] font-bold'>Start</h1>
                        )

                    }
                </section>
                <Favorite favorite={favorite} />
            </main>
        </div>
    )
}

export default MainPage
