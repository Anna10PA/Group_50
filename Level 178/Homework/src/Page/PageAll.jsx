import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Card_01 from '../Components/Card_01'
import { useEffect, useState } from 'react'

function PageAll() {
  const navigate = useNavigate()
  const Location = useLocation()
  const item = Location.state
  const { CategoryType } = useParams()

  const [priceUp, setPriceUp] = useState(false)
  const [colorUp, setColorUp] = useState(false)
  const [sizeUp, setSizeUp] = useState(false)

  const [colorList, setColorList] = useState([])

  const [sizeList, setSizeList] = useState([])
  const [chosenSize, setChosenSize] = useState([])

  // color
  useEffect(() => {
    let allColor = []
    item.map((element, _) => {
      allColor = [...allColor, ...element.colorList]
    })
    setColorList([...new Set(allColor)])
    console.log([...new Set(allColor)])
  }, [item])


  // size
  useEffect(() => {
    let allSize = []
    item.map((element, _) => {
      allSize = [...allSize, ...element.sizeList]
    })
    setSizeList([...new Set(allSize)])
    console.log(['hi', ...new Set(allSize)])
  }, [item])


  return (
    <main className='flex px-[80px] gap-[30px]'>
      <aside className='rounded-[20px] border-[1px] border-[rgba(0,0,0,0.1)] min-w-[280px] max-w-[320px]'>
        {/* div 01 */}
        <div className='flex items-center justify-between mx-[24px] py-[20px] border-b border-[rgba(0,0,0,0.1)]'>
          <h1 className='text-[20px] font-[700]'>Filter</h1>
          <i className="fa-solid fa-sliders rotate-270 text-[rgba(0,0,0,0.4)] text-[22px] cursor-pointer"></i>
        </div>

        {/* div 02 */}
        <div className='py-[20px] border-b border-[rgba(0,0,0,0.1)] mx-[24px]'>
          <ul className='flex flex-col gap-[10px]'>
            <li className='flex items-center justify-between text-[rgba(0,0,0,0.6)]'>
              <p className='text-[16px] cursor-pointer'>T-shirts</p>
              <i className="fa-solid fa-angle-right cursor-pointer"></i>
            </li>
            <li className='flex items-center justify-between text-[rgba(0,0,0,0.6)]'>
              <p className='text-[16px]'>Shorts</p>
              <i className="fa-solid fa-angle-right cursor-pointer"></i>
            </li>
            <li className='flex items-center justify-between text-[rgba(0,0,0,0.6)]'>
              <p className='text-[16px]'>Shirts</p>
              <i className="fa-solid fa-angle-right cursor-pointer"></i>
            </li>
            <li className='flex items-center justify-between text-[rgba(0,0,0,0.6)]'>
              <p className='text-[16px]'>Hoodie</p>
              <i className="fa-solid fa-angle-right cursor-pointer"></i>
            </li>
            <li className='flex items-center justify-between text-[rgba(0,0,0,0.6)]'>
              <p className='text-[16px]'>Jeans</p>
              <i className="fa-solid fa-angle-right cursor-pointer"></i>
            </li>
          </ul>
        </div>

        {/* div 03 */}
        <div className='mx-[24px] py-[20px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[20px] font-[700]'>
              Price
            </h1>
            <i className={`fa-solid fa-angle-${colorUp ? 'up text-black' : 'down text-[rgba(0,0,0,0.6)]'} cursor-pointer duration-200 active:rotate-[180deg]`} onClick={() => {
              setColorUp(!colorUp)
            }}></i>
          </div>
        </div>

        {/* div 04 */}
        <div className='mx-[24px] py-[20px] border-[rgba(0,0,0,0.1)] border-t flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[20px] font-[700]'>
              Colors
            </h1>
            <i className={`fa-solid fa-angle-${priceUp ? 'up text-black' : 'down text-[rgba(0,0,0,0.6)]'} cursor-pointer duration-200 active:rotate-[180deg]`} onClick={() => {
              setPriceUp(!priceUp)
            }}></i>
          </div>
          <div className='flex flex-wrap gap-[10px]'>
            {
              colorList.map((el, index) => {
                return <div key={index} className='w-[35px] h-[35px] rounded-[50%] cursor-pointer border-[2px]' style={{ backgroundColor: el, borderColor: el === 'white' ? 'gray' : el }} onClick={() => {
                  console.log(index)
                }}></div>
              })
            }
          </div>
        </div>

        {/* div 05 */}
        <div className='mx-[24px] py-[20px] border-[rgba(0,0,0,0.1)] border-t flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[20px] font-[700]'>
              Size
            </h1>
            <i className={`fa-solid fa-angle-${sizeUp ? 'up text-black' : 'down text-[rgba(0,0,0,0.6)]'} cursor-pointer duration-200 active:rotate-[180deg]`} onClick={() => {
              setSizeUp(!sizeUp)
            }}></i>
          </div>
          <div className='flex flex-wrap gap-[10px]'>
            {
              sizeList.map((el, index) => {
                return <div key={index} className={`w-[max-content] rounded-[62px] cursor-pointertext-[16px] px-[15px] py-[7px] ${chosenSize.includes(el) ? 'bg-black text-white' : 'text-[rgba(0,0,0,0.6)]'} bg-[rgba(240,240,240,1)] `} onClick={() => {
                  chosenSize.includes(el)
                    ? setChosenSize(chosenSize.filter(item => item !== el)) :
                     setChosenSize([...chosenSize, el])
                }}>{el}</div>
              })
            }
          </div>
        </div>
      </aside>
      <section>
        <h1 className='text-[32px] font-[700]'>{CategoryType ? CategoryType : 'For You'}</h1>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full '>
          {
            item.map((item, index) => {
              return <Card_01
                key={index}
                img={item.mainImgSrc}
                price={item.price}
                name={item.title}
                oldPrice={item.discount}
                rate={item.rate}
                onClick={() =>
                  navigate(`/product/${item.clothesType.toLowerCase()}/${item.title.toLowerCase()}`, { state: item })
                } />
            })
          }
        </div>
      </section>
    </main>
  )
}

export default PageAll
