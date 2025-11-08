import Card_04 from "../Components/Card_04"

function Cart() {
  return (
    <main className="mx-[80px] border-t border-[rgba(0,0,0,0.1)] flex items-start flex-col gap-[20px]">
      <nav className='flex items-center gap-[20px] mt-[20px]'>
        <h1 className='text-[rgba(0,0,0,0.6)] text-[16px]'>Home</h1>
        <i className="fa-solid fa-chevron-right text-[rgba(0,0,0,0.6)]"></i>
        <h1>Cart</h1>
      </nav>
      <section className="w-full flex flex-col items-start gap-[10px]">
        <h1 className='text-[40px] font-[300] font-["BBH_Sans_Hegarty"]'>YOUR CART</h1>
        <div className="w-full">
          <div className="px-[20px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[20px] max-w-[60%] flex flex-col items-start max-h-[50vh] overflow-auto" >
            <Card_04 />
            <Card_04 />

            <Card_04 />
            <Card_04 />
            <Card_04 />
            <Card_04 />

          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
