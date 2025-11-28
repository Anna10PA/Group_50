import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Card_01 from '../Components/Card_01'
import { useEffect, useState } from 'react'

function PageAll() {
  const navigate = useNavigate()
  const Location = useLocation()
  const item = Location.state
  const { CategoryType } = useParams()
  // 
  const [priceUp, setPriceUp] = useState(false)
  const [colorUp, setColorUp] = useState(false)
  const [sizeUp, setSizeUp] = useState(false)
  const [dressStyle, setDressStyle] = useState(false)
  // 
  const [colorList, setColorList] = useState([])
  const [colors, setColors] = useState([])
  // 
  const [sizeList, setSizeList] = useState([])
  const [chosenSize, setChosenSize] = useState([])
  // 
  const [clothe, setClothe] = useState('')
  // 
  const [curentPageNumber, setCurentPageNumber] = useState(0)
  // 


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

  // page render + filter
  let renderPages = () => {
    let pages = []
    let curentPage = []

    for (let it of item) {
      let isAllow = true

      // clothes type filter
      if (clothe && it.clothesType !== clothe) {
        isAllow = false
      }

      // size type filter
      if (isAllow && chosenSize.length > 0) {
        let isPass = false

        for (let i of chosenSize) {
          if (it.sizeList.includes(i)) {
            isPass = true
            break
          }
        }
        if (!isPass) {
          isAllow = false
        }

      }

      // color type filter
      if (isAllow && colors.length > 0) {
        let isPass = false

        for (let i of colors) {
          if (it.colorList.includes(i)) {
            isPass = true
            break
          }
        }

        if (!isPass) {
          isAllow = false
        }
      }
      if (isAllow) {
        if (curentPage.length === 9) {
          pages.push(curentPage)
          curentPage = []
        }
        curentPage.push(it)
      }

    }
    if (curentPage.length > 0) pages.push(curentPage)
    return pages
  }

  return (
    <main className='flex flex-col mx-[80px] gap-[30px] border-t border-[rgba(0,0,0,0.1)] py-[25px] max-lg:mx-[20px] '>
      <div className='flex items-center gap-[15px] text-[18px]'>
        <h1 className='text-[rgba(0,0,0,0.6)]'>Home</h1>
        <i className="fa-solid fa-angle-right cursor-pointer text-[rgba(0,0,0,0.6)]"></i>
        <h1>
          {Location.pathname.split('/')[1]}
        </h1>
      </div>
      <section className='w-full flex gap-[30px] relative max-md:mx-[10px]'>
        <aside className='rounded-[20px] border-[1px] border-[rgba(0,0,0,0.1)] min-w-[280px] max-w-[320px] h-[max-content] pb-[30px] max-lg:hidden'>
          {/* div 01 */}
          <div className='flex items-center justify-between mx-[24px] py-[20px] border-b border-[rgba(0,0,0,0.1)]'>
            <h1 className='text-[20px] font-[700]'>Filter</h1>
            <i className="fa-solid fa-sliders rotate-270 text-[rgba(0,0,0,0.4)] text-[22px] cursor-pointer"></i>
          </div>

          {/* div 02 */}
          <div className='py-[20px] border-b border-[rgba(0,0,0,0.1)] mx-[24px]'>
            <ul className='flex flex-col gap-[12px]'>
              <li className={`${clothe === 'T-shirts' ? 'font-[600] text-black' : 'text-[rgba(0,0,0,0.6)]'} flex items-center justify-between `} onClick={() => {
                setClothe( clothe === 'T-shirts' ? false : 'T-shirts')
              }}>
                <p className='text-[16px] cursor-pointer'>T-shirts</p>
                <i className="fa-solid fa-angle-right cursor-pointer"></i>
              </li>
              <li className={`${clothe === 'Shorts' ? 'font-[600] text-black' : 'text-[rgba(0,0,0,0.6)]'} flex items-center justify-between `} onClick={() => {
                setClothe(clothe === 'Shorts' ? false : 'Shorts')
              }}>
                <p className='text-[16px]'>Shorts</p>
                <i className="fa-solid fa-angle-right cursor-pointer"></i>
              </li>
              <li className={`${clothe === 'Shirts' ? 'font-[600] text-black' : 'text-[rgba(0,0,0,0.6)]'} flex items-center justify-between `} onClick={() => {
                setClothe(clothe === 'Shirts' ? false : 'Shirts')
              }}>
                <p className='text-[16px]'>Shirts</p>
                <i className="fa-solid fa-angle-right cursor-pointer"></i>
              </li>
              <li className={`${clothe === 'Hoodie' ? 'font-[600] text-black' : 'text-[rgba(0,0,0,0.6)]'} flex items-center justify-between `} onClick={() => {
                setClothe(clothe === 'Hoodie' ? false : 'Hoodie')
              }}>
                <p className='text-[16px]'>Hoodie</p>
                <i className="fa-solid fa-angle-right cursor-pointer"></i>
              </li>
              <li className={`${clothe === 'Jeans' ? 'font-[600] text-black' : 'text-[rgba(0,0,0,0.6)]'} flex items-center justify-between `} onClick={() => {
                setClothe(clothe === 'Jeans' ? false : 'Jeans')
              }}>
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
              <i className={`fa-solid fa-angle-${priceUp ? 'up text-black' : 'down text-[rgba(0,0,0,0.6)]'} cursor-pointer duration-200 active:rotate-[180deg]`} onClick={() => {
                setPriceUp(!priceUp)
              }}></i>
            </div>
          </div>

          {/* div 04 */}
          <div className='mx-[24px] py-[20px] border-[rgba(0,0,0,0.1)] border-t flex flex-col gap-[20px]'>
            <div className='flex items-center justify-between'>
              <h1 className='text-[20px] font-[700]'>
                Colors
              </h1>
              <i className={`fa-solid fa-angle-${colorUp ? 'up text-black' : 'down text-[rgba(0,0,0,0.6)]'} cursor-pointer duration-200 active:rotate-[180deg]`} onClick={() => {
                setColorUp(!colorUp)
              }}></i>
            </div>
            <div className={`flex flex-wrap justify-start items-start gap-[10px] overflow-hidden ${colorUp ? 'h-[0]' : 'h-[200px]'} duration-200`}>
              {
                colorList.map((el, index) => {
                  return <div key={index} className={`w-[35px] h-[35px] flex items-center justify-center ${el !== 'white' ? 'text-white' : 'text-black'} rounded-[50%] cursor-pointer border-[2px]`} style={{ backgroundColor: el, borderColor: el === 'white' ? 'gray' : el }} onClick={() => {
                    let newList = [...colors]
                    newList.splice(newList.indexOf(el), 1)
                    setColors(colors.includes(el) ? newList : [...colors, el])
                  }}>
                    <i className={`fa-solid fa-check  ${colors.includes(el) ? 'opacity-[100%]' : 'opacity-0'}`}></i>
                  </div>
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
            <div className={`flex flex-wrap justify-start items-start gap-[10px] overflow-hidden ${sizeUp ? 'h-0' : 'h-[100px]'} duration-200`}>
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

          {/* div 06 */}
          <div className='mx-[24px] py-[20px] border-[rgba(0,0,0,0.1)] border-t flex flex-col gap-[20px]'>
            <div className='flex items-center justify-between'>
              <h1 className='text-[20px] font-[700]'>
                Dress Style
              </h1>
              <i className={`fa-solid fa-angle-${dressStyle ? 'up text-black' : 'down text-[rgba(0,0,0,0.6)]'} cursor-pointer duration-200 active:rotate-[180deg]`} onClick={() => {
                setDressStyle(!dressStyle)
              }}></i>
            </div>
            <div>
              <ul className={`flex flex-col justify-between items-center w-full gap-[10px] overflow-hidden ${dressStyle ? 'h-[0]' : 'h-[180px]'} duration-200`}>
                <li className='flex items-center justify-between w-full text-[rgba(0,0,0,0.6)]'>
                  <p className={`text-[16px] ${CategoryType === 'Casual' ? 'font-[600] text-black' : 'font-[400]'}`}>Casual</p>
                  <i className="fa-solid fa-angle-right cursor-pointer"></i>
                </li>
                <li className='flex items-center justify-between w-full text-[rgba(0,0,0,0.6)]'>
                  <p className={`text-[16px] ${CategoryType === 'Formal' ? 'font-[600] text-black' : 'font-[400]'}`}>Formal</p>
                  <i className="fa-solid fa-angle-right cursor-pointer"></i>
                </li>
                <li className='flex items-center justify-between w-full text-[rgba(0,0,0,0.6)]'>
                  <p className={`text-[16px] ${CategoryType === 'Party' ? 'font-[600] text-black' : 'font-[400]'}`}>Party</p>
                  <i className="fa-solid fa-angle-right cursor-pointer"></i>
                </li>
                <li className='flex items-center justify-between w-full text-[rgba(0,0,0,0.6)]'>
                  <p className={`text-[16px] ${CategoryType === 'Hoodie' ? 'font-[600] text-black' : 'font-[400]'}`}>Hoodie</p>
                  <i className="fa-solid fa-angle-right cursor-pointer"></i>
                </li>
                <li className='flex items-center justify-between w-full text-[rgba(0,0,0,0.6)]'>
                  <p className={`text-[16px] ${CategoryType === 'Gym' ? 'font-[600] text-black' : 'font-[400]'}`}>Gym</p>
                  <i className="fa-solid fa-angle-right cursor-pointer"></i>
                </li>
              </ul>
            </div>
          </div>
          <button className='bg-black rounded-[62px] text-[16px] text-white w-[87%] h-[48px] cursor-pointer  mx-[20px] mt-[20px]'>Apply Filter</button>
        </aside>

        <section className='gap-[15px] flex flex-col items-start max-sm:items-center w-full'>
          <h1 className='text-[32px] font-[100] font-[BBH_Sans_Hegarty]'>{CategoryType ? CategoryType : 'Everithing For You!'}</h1>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center w-full h-[100%] gap-[20px] border-b border-[rgba(0,0,0,0.1)] pb-[30px] '>
            {
              renderPages().length > 0 ? 
              renderPages()[curentPageNumber].map((item, index) => {
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
              }) : <h1 className='text-[40px] font-[100] font-[BBH_Sans_Hegarty] max-md:text-[30px] max-sm:text-[20px]'>Empty <i className="fa-solid fa-face-sad-tear"></i> </h1>
            }
          </div>
          <div className='flex items-center justify-between h-[max-content] absolute bottom-[-70px] gap-[70px] left-[40%] max-lg:left-0 max-md:gap-[20px]'>
            <button className='text-[16px] border rounded-[5px] border-[#E6E6E6] px-[30px] flex items-center gap-[10px] justify-center font-[500] py-[10px] cursor-pointer max-sm:hidden' onClick={() => {
              setCurentPageNumber(curentPageNumber - 1 < 0 ? 0 : curentPageNumber - 1)
            }}>
              <i className="fa-solid fa-arrow-left "></i>
              Previous
            </button>
            <div className='flex items-center gap-[20px]'>
              {
                renderPages().map((_, index) => {
                  return <button className={`text-[15px] font-[500] w-[40px] h-[40px] rounded-[8px] cursor-pointer ${index == curentPageNumber ? 'bg-[#f0f0f0] text-black' : 'text-[rgba(0,0,0,0.5)] bg-white'} `} onClick={() => {
                    setCurentPageNumber(index)
                  }} key={index}>{index + 1}</button>
                })
              }
            </div>
            <button className='text-[16px] border rounded-[5px] border-[#E6E6E6] px-[30px] flex items-center gap-[10px] justify-center font-[500] py-[10px] cursor-pointer max-sm:hidden' onClick={() => {
              setCurentPageNumber(curentPageNumber + 1 === renderPages().length ? renderPages().length - 1 : curentPageNumber + 1)
            }}>
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </section>
      </section>
    </main>
  )
}

export default PageAll
