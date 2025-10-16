import Card_01 from "./Card_01"

function TopSell() {
    let NewArrivals = [
        {
            name: 'T-SHIRT WITH TAPE DETAILS',
            img: '/image-001-1.png',
            price: 120,
            rate: 4.5,
            oldPrice: null
        },
        {
            name: 'SKINNY FIT JEANS',
            img: '/image-001-2.png',
            price: 240,
            rate: 3.5,
            oldPrice: 260
        },
        {
            name: 'CHECKERED SHIRT',
            img: '/image-001-3.png',
            price: 180,
            rate: 4.5,
            oldPrice: null
        },
        {
            name: 'SLEEVE STRIPED T-SHIRT',
            img: '/image-001-4.png',
            price: 130,
            rate: 4.5,
            oldPrice: 160
        }
    ]
    let topSell = [
        {
            name: 'VERTICAL STRIPED SHIRT',
            img: '/image-002-1.png',
            price: 212,
            rate: 5,
            oldPrice: 232
        },
        {
            name: 'COURAGE GRAPHIC T-SHIRT',
            img: '/image-002-2.png',
            price: 145,
            rate: 4,
            oldPrice: null
        },
        {
            name: 'LOOSE FIT BERMUDA SHORTS',
            img: '/image-002-3.png',
            price: 80,
            rate: 3,
            oldPrice: null
        }, 
        {
            name: 'FADED SKINNY JEANS',
            img: '/image-002-4.png',
            price: 210,
            rate: 4.5,
            oldPrice: null
        }
    ]
    return (
        <>
            <section className="px-[40px] py-[80px] flex flex-col items-center gap-[50px] border-b border-gray-300">
                <h1 className='text-[48px] font-[800] text-center max-md:text-[30px]'>NEW ARRIVALS</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] justify-items-center w-full">
                    {
                        NewArrivals.map((item, index) => {
                            return <Card_01 img={item.img} price={item.price} name={item.name} oldPrice={item.oldPrice} rate={item.rate} key={index} />
                        })
                    }
                </div>
                <button className="px-[60px] border-gray-300 border-[1px] py-[10px] rounded-[100px] font-[500] cursor-pointer duration-150 hover:bg-gray-200">View All</button>
            </section>
            <section className="px-[40px] py-[80px] flex flex-col items-center gap-[50px] border-b border-gray-300">
                <h1 className='text-[48px] font-[800] text-center max-md:text-[30px]'>TOP SELLING</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] justify-items-center w-full">
                    {
                        topSell.map((item, index) => {
                            return <Card_01 img={item.img} price={item.price} name={item.name} oldPrice={item.oldPrice} rate={item.rate} key={index} />
                        })
                    }
                </div>
                <button className="px-[60px] border-gray-300 border-[1px] py-[10px] rounded-[100px] font-[500] cursor-pointer duration-150 hover:bg-gray-200">View All</button>
            </section>
        </>
    )
}

export default TopSell
