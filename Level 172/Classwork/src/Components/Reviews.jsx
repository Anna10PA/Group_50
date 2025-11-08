import { useLocation } from "react-router-dom"
import Card_03 from "./Card_03"

function Reviews() {
    let Location = useLocation()
    let product = Location.state
    console.log('Review', product)

    let answres = product.reviews || false

    if (!product) return <h1>Not Found</h1>
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <h1 className="text-[24px] font-[600] max-sm:text-[20px]">All Reviews <span className="text-[rgba(0,0,0,0.6)] text-[16px] font-[400]">({product.reviews.length})</span></h1>
                <div className="flex items-center gap-[20px] max-sm:gap-[5px]">
                    <i className="fa-solid fa-sliders rotate-[90deg] bg-[rgba(240,240,240,1)] text-[20px] p-[15px] cursor-pointer rounded-[50%] max-sm:text-[15px]"></i>
                    <select name="" id="" className=" bg-[rgba(240,240,240,1)] py-[15px] px-[20px] rounded-[62px] outline-none cursor-pointer font-[600] max-sm:hidden">
                        <option value="">Latest</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <button className="text-white bg-black rounded-[62px] px-[30px] py-[15px] cursor-pointer font-[500] max-sm:text-[12px] min-w-[max-content]">Write a Review</button>
                </div>
            </div>
            <div className={`${product.reviews ? 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr)]' : 'flex items-center justify-center'}`}>
                {
                    answres ?
                        answres.map(item => {
                            console.log(item)
                            return <Card_03 item={item} />
                        }) : null
                }
            </div>
        </>
    )
}

export default Reviews
