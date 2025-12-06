import { useContext, useState } from 'react'
import { IsOpen } from './App'
import { FilteredList } from './App'
import { Items } from './App'

function Filter() {
    let { open } = useContext(IsOpen)
    let { filteredItems } = useContext(Items)
    let { setFilter } = useContext(FilteredList)

    let [category, setCategory] = useState({
        price: false,
        name: false,
        id: false,
    })



    return (
        <aside className={`relative max-md:absolute max-md:top-2 max-md: ${open ? 'w-[50%] max-w-[500px] px-[30px] ml-[30px] min-w-[350px] translate-y-0' : 'w-0 m-0 min-w-0  max-md:-translate-y-130 '} max-md:z-10 py-5 h-max max-sm:mx-[15px] bg-gray-950 overflow-hidden duration-300 right-0 rounded text-white flex items-start flex-col gap-6 max-md:max-w-full max-md:w-full max-md:ml-0 max-md:min-w-[90%] max-sm:left-0 max-sm:w-[94%]`}
        >
            <h1 className='text-2xl font-extrabold tracking-[2px]'>Filter</h1>

            <form className='w-full flex items-start flex-col gap-5' onChange={(e) => {
                let { name, value } = e.target
                setFilter(prev => ({ ...prev, [name]: name === 'max_price' && value === '' ? 100000000 : value }))
            }}>

                {/* filter by price */}
                <div className={`flex items-start flex-col bg-gray-900 w-full p-4 rounded-[10px] ${category.price ? 'gap-2' : 'gap-0'}`}>
                    <div className='w-full flex items-center justify-between duration-100'>
                        <h2 className='text-xl font-bold'>Price</h2>
                        <i className={`fa-solid fa-chevron-${category.price ? 'down ' : 'up text-gray-600'} cursor-pointer duration-100 active:rotate-180 `} onClick={() => {
                            setCategory(
                                { ...category, price: !category.price })
                        }}></i>
                    </div>
                    <div className={`flex items-end justify-start w-full duration-100  overflow-hidden gap-5 ${category.price ? 'h-14 ' : 'h-0'} h-0`}>
                        <div className='relative flex items-center '>
                            <input type="number" className='border border-white outline-none rounded peer px-2 py-1 w-20 focus:text-white text-gray-950 ' id='minPrice' min={0} name='min_price' />
                            <label htmlFor="minPrice" className='absolute left-3 top-1 duration-100 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-white peer-focus:tracking-[3px] peer-focus:text-[14px] text-gray-400 cursor-pointer'>Min</label>
                            <span className='text-2xl font-extrabold ml-[5px]'>$</span>
                        </div>
                        <div className='relative flex items-center'>
                            <input type="number" className='border border-white outline-none rounded peer px-2 py-1 w-20 focus:text-white text-gray-950 ' id='manPrice' name='max_price' min={0} />
                            <label htmlFor="manPrice" className='absolute left-3 top-1 duration-100 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-white peer-focus:tracking-[3px] peer-focus:text-[14px] text-gray-400 cursor-pointer'>Max</label>
                            <span className='text-2xl font-extrabold ml-[5px]'>$</span>
                        </div>
                    </div>
                </div>

                {/* filter by id */}
                <div className={`flex items-start flex-col bg-gray-900 w-full p-4 rounded-[10px] ${category.id ? 'gap-2' : 'gap-0'}`}>
                    <div className='w-full flex items-center justify-between duration-100'>
                        <h2 className='text-xl font-bold'>Id</h2>
                        <i className={`fa-solid fa-chevron-${category.id ? 'down ' : 'up text-gray-600'} cursor-pointer duration-100 active:rotate-180 `} onClick={() => {
                            setCategory(
                                { ...category, id: !category.id })
                        }}></i>
                    </div>
                    <div className={`flex items-end justify-start w-full duration-100  overflow-hidden gap-5 ${category.id ? 'h-14 ' : 'h-0'} h-0`}>
                        <div className='flex items-center gap-3 w-full'>
                            <span className='text-2xl font-extrabold ml-[5px]'>#</span>
                            <div className='relative flex items-center '>
                                <input type="number" className='border border-white outline-none rounded peer px-2 py-1 w-full focus:text-white text-gray-950 ' name='id' id='id' min={0} />
                                <label htmlFor="id" className='absolute left-3 top-1 duration-100 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-white peer-focus:tracking-[3px] peer-focus:text-[14px] text-gray-400 cursor-pointer'>Product Id</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* filter by name */}
                <div className={`flex items-start flex-col bg-gray-900 w-full p-4 rounded-[10px] ${category.name ? 'gap-2' : 'gap-0'}`}>
                    <div className='w-full flex items-center justify-between duration-100'>
                        <h2 className='text-xl font-bold'>Name</h2>
                        <i className={`fa-solid fa-chevron-${category.name ? 'down ' : 'up text-gray-600'} cursor-pointer duration-100 active:rotate-180 `} onClick={() => {
                            setCategory(
                                { ...category, name: !category.name })
                        }}></i>
                    </div>
                    <div className={`flex items-end justify-start w-full duration-100  overflow-hidden gap-5 ${category.name ? 'h-14 ' : 'h-0'} h-0`}>
                        <div className='flex items-center gap-3 w-full'>
                            <i className="fa-solid fa-magnifying-glass text-xl font-extrabold ml-[5px]"></i>
                            <div className='relative flex items-center '>
                                <input type="text" className='border border-white outline-none rounded peer px-2 py-1 w-full focus:text-white text-gray-950 ' name='name' id='name' min={0} />
                                <label htmlFor="name" className='absolute left-3 top-1 duration-100 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-white peer-focus:tracking-[3px] peer-focus:text-[14px] text-gray-400 cursor-pointer'>Product Name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <button className='bg-gray-900 px-5 rounded-[10px] py-3 font-bold cursor-pointer hover:bg-red-800 duration-100' onClick={(e) => {
                        e.preventDefault()
                        setFilter({
                            min_price: 0,
                            max_price: 1000000000000,
                            id: 0,
                            name: ''
                        })
                    }}>Clean</button>
                    <div>
                        <h1>Founded item: ({filteredItems.length})</h1>
                    </div>
                </div>
            </form>
        </aside >
    )
}

export default Filter
