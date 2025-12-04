
import { useContext } from "react"
import { IsOpen } from "./App"

function Favorite({}) {
    const { open } = useContext(IsOpen)

    return (
        <aside className={`bg-[rgba(0,0,5,0.4)]  h-[] min-h-[200px] rounded flex items-center overflow-hidden flex-col duration-100  ${open ? 'w-[50%] px-[30px] py-[20px] ' : 'w-0 p-0'} relative right-0 top-[30px] `} onClick={() => {

        }} >
            <h1 className='text-white font-[Lilita_One]'>Favorite Movie</h1>
            {/* {
                favorite.length > 0 ? 
            } */}
        </aside>
    )
}

export default Favorite
