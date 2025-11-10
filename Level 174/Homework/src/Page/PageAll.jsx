import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Card_01 from '../Components/Card_01'

function PageAll() {
  const navigate = useNavigate()
  const Location = useLocation()
  const item = Location.state
  const { CategoryType } = useParams()

  console.log(item)

  return (
    <main className='flex px-[80px] gap-[30px]'>
      <aside className='rounded-[20px] border-[1px] border-[rgba(0,0,0,0.1)] min-w-[300px]'>
        <div className='flex items-center justify-between px-[24px] py-[20px]'>
          <h1 className='text-[20px] font-[700]'>Filter</h1>
          <i className="fa-solid fa-sliders"></i>
        </div>
      </aside>
      <section>
        <h1 className='text-[32px] font-[700]'>{CategoryType}</h1>
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
