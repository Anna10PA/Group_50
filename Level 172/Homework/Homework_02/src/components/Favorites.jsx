import { useContext } from 'react'
import { SendInfo } from './Card_01'
import Card_02 from './Card_02'

function Favorites() {
  let { favListName } = useContext(SendInfo)
  console.log(favListName)
  return (
    <>
      <header className="min-h-[80px] bg-[#102E4A] flex items-center justify-end px-[70px] max-md:px-[20px]">
      </header>
      <main className='w-full min-h-[83vh] flex items-center flex-col justify-center gap-[40px] px-[70px] mt-[50px] max-md:px-[30px]'>
        <h1 className="font-[Momo_Signature] font-[700] text-[40px] text-[#102E4A] max-sm:text-[30px]">Favorite Foods</h1>
        <section className='w-full h-[100%] min-h-[80vh] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-[70px] max-md:px-[20px] gap-[30px]'>

          {
            favListName.map((item, index) => {
              return <Card_02 info={item} key={index} />
            })
          }
        </section>
      </main>
    </>
  )
}

export default Favorites
