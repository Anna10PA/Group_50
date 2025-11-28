import Card_04 from "../Components/Card_04"
import Footer from '../Components/Footer'

function Cart() {
  return (
    <main className="mx-[80px] border-t border-[rgba(0,0,0,0.1)] flex items-start flex-col gap-[20px] max-lg:mx-[20px]">
      <nav className='flex items-center gap-[20px] mt-[20px]'>
        <h1 className='text-[rgba(0,0,0,0.6)] text-[16px]'>Home</h1>
        <i className="fa-solid fa-chevron-right text-[rgba(0,0,0,0.6)]"></i>
        <h1>Cart</h1>
      </nav>
      <section className="w-full flex flex-col items-start gap-[10px]">
        <h1 className='text-[40px] font-[300] font-["BBH_Sans_Hegarty"] mb-[15px] max-md:text-[32px]'>YOUR CART</h1>
        <div className="w-full flex justify-between gap-[20px] max-xl:flex-col">
          {/* items */}
          <div className="px-[20px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[20px] w-[58%] flex flex-col items-start max-h-[60vh] overflow-auto my-div w-full max-md:px-[12px]" >
            <Card_04 />
  
          </div>
          <div className="px-[30px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[20px] w-[41%] py-[15px] flex flex-col items-start gap-[16px] h-[57vh] max-xl:w-full">
            <h1 className="text-[24px] font-[700] max-md:text-[22px]">Order Summary</h1>
            <div className="w-full flex flex-col items-start gap-[12px]">
              <div className="flex justify-between w-full">
                <p className="text-[rgba(0,0,0,0.6)] text-[18px] max-md:text-[16px]"> Subtotal: </p>
                <span className="font-[700] text-[18px] max-md:text-[16px]"> 120$</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[rgba(0,0,0,0.6)] text-[18px] max-md:text-[16px]">Discount (item):</p>
                <span className="text-[rgba(255,51,51,1)] font-[700] text-[18px] max-md:text-[16px]"> 120$ </span>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-[rgba(0,0,0,0.6)] text-[18px] max-md:text-[16px]">Delivery Fee:</p>
                <span className="font-[700] text-[18px] max-md:text-[16px]"> 120$</span>
              </div>
              <hr className=" w-full border-[rgba(0,0,0,0.1)] "/>
              <div className="flex justify-between w-full">
                <h1 className="text-[20px] max-md:text-[16px]">Total: </h1>
                <h1 className="font-[700] text-[24px] max-md:text-[16px]">120$</h1>
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-[10px]">
              <div className="relative flex items-center px-[20px] bg-[rgba(240,240,240,1)] py-[10px] gap-[10px] rounded-[62px] w-full min-w-[min-content]">
                <i className="fa-solid fa-tag text-[rgba(0,0,0,0.4)]"></i>
                <input type="text" placeholder="Add promo code" className="outline-none text-[16px] w-full max-md:text-[14px]" />
              </div>
              <button className="bg-black font-[400] text-[16px] text-white py-[10px] px-[30px] rounded-[62px] max-md:text-[16px] cursor-pointer">
                Apply
              </button>
            </div>
            <button className="bg-black text-white flex gap-[20px] items-center px-[20px] text-[18px] w-full py-[15px] rounded-[62px] justify-center mt-[10px] max-md:text-[16px] cursor-pointer">
              Go to Checkout
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </main >
  )
}

export default Cart
