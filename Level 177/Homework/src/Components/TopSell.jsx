import Card_01 from "./Card_01"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

function TopSell() {
    const [List, setList] = useState([])
    const [newArrivals, setNewArrivals] = useState([])
    const [random, setRandom] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch("/data.json")
                const data = await response.json()
                setList(data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        if (List.length === 0) return

        const popular = List.filter(item => item.mostPopular)
        const selected = []
        const maxItems = Math.min(4, popular.length)

        while (selected.length < maxItems) {
            const index = Math.floor(Math.random() * popular.length)
            const item = popular[index]
            if (!selected.includes(item)) {
                selected.push(item)
            }
        }

        setNewArrivals(selected)
    }, [List])

    useEffect(() => {
        if (List.length === 0) return

        const popular = List.filter(item => item.mostPopular)
        const selected = []
        const maxItems = Math.min(4, popular.length)

        while (selected.length < maxItems) {
            const index = Math.floor(Math.random() * popular.length)
            const item = popular[index]
            if (!selected.includes(item)) {
                selected.push(item)
            }
        }

        setRandom(selected)
    }, [List])


    return (
        <>
            <section className="px-[40px] py-[80px] flex flex-col items-center gap-[50px] border-b border-gray-300 w-full">
                <h1 className='text-[48px] font-[800] text-center max-md:text-[30px]'>NEW ARRIVALS</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] justify-items-center w-full">
                    {newArrivals.map((item, index) => (
                        <Card_01
                            key={index}
                            img={item.mainImgSrc}
                            price={item.price}
                            name={item.title}
                            oldPrice={item.discount}
                            rate={item.rate}
                            onClick={() => 
                                navigate(`/product/${item.clothesType.toLowerCase()}/${item.title.toLowerCase()}`, { state: item })
                            }
                        />
                    ))}
                </div>
                <button className="px-[60px] border-gray-300 border-[1px] py-[10px] rounded-[100px] font-[500] cursor-pointer duration-150 hover:bg-gray-200">
                    View All
                </button>
            </section>

            <section className="px-[40px] py-[80px] flex flex-col items-center gap-[50px] border-b border-gray-300 w-full">
                <h1 className='text-[48px] font-[800] text-center max-md:text-[30px]'>TOP SELLING</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] justify-items-center w-full">
                    {random.map((item, index) => (
                        console.log(item),
                        <Card_01
                            key={index}
                            img={item.mainImgSrc}
                            price={item.price}
                            name={item.title}
                            oldPrice={item.discount}
                            rate={item.rate}
                            onClick={() =>
                                navigate(`/product/${item.clothesType.toLowerCase()}/${item.title.toLowerCase()}`, { state: item })
                            }
                        />
                    ))}
                </div>
                <button className="px-[60px] border-gray-300 border-[1px] py-[10px] rounded-[100px] font-[500] cursor-pointer duration-150 hover:bg-gray-200">
                    View All
                </button>
            </section>
        </>
    )
}

export default TopSell
