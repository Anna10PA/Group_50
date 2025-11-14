import Send from './Send'

function Footer() {
    return (
        <footer className='bg-[rgba(240,240,240,1)] min-h-[500px] relative top-[100px] max-xl:top-[400px] flex flex-col items-center gap-[100px]'>
            <Send />
            <div className='mt-[0px] px-[70px] max-xl:mt-[230px] max-md:mt-[170px] w-full'>
                <div className='grid grid-cols-5 gap-[30px] justify-items-center max-lg:grid-cols-4 max-md:grid-cols-2 border-b border-gray-400 mb-[300px] w-full'>
                    <div className='flex flex-col gap-[15px] items-start justify-center max-lg:row-start-1 max-lg:col-span-4 w-full '>
                        <h1 className='font-[900] text-[33px]'>SHOP.CO</h1>
                        <p className='text-[rgba(0,0,0,0.6)]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className='flex items-center gap-[20px] text-[25px] mt-[10px]'>
                            <div>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-github"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-[17px] max-lg:row-start-2 w-full'>
                        <h2 className='text-[18px] tracking-[3px] font-[500]'>COMPANY</h2>
                        <ul className='text-[rgba(0,0,0,0.6)] flex flex-col gap-[14px]'>
                            <li>
                                About
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Works
                            </li>
                            <li>
                                Career
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start gap-[17px] max-lg:row-start-2 w-full'>
                        <h2 className='text-[18px] tracking-[3px] font-[500]'>HELP</h2>
                        <ul className='text-[rgba(0,0,0,0.6)] flex flex-col gap-[14px]'>
                            <li>
                                Customer Support
                            </li>
                            <li>
                                Delivery Details
                            </li>
                            <li>
                                Terms & Conditions
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start gap-[17px] max-lg:row-start-2 max-md:row-start-3 w-full'>
                        <h2 className='text-[18px] tracking-[3px] font-[500]'>FAQ</h2>
                        <ul className='text-[rgba(0,0,0,0.6)] flex flex-col gap-[14px]'>
                            <li>
                                Account
                            </li>
                            <li>
                                Manage Deliveries
                            </li>
                            <li>
                                Orders
                            </li>
                            <li>
                                Payments
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start gap-[17px] max-lg:row-start-2 max-md:row-start-2 max-md:column-start-2 w-full'>
                        <h2 className='text-[18px] tracking-[3px] font-[500]'>RESOURSES</h2>
                        <ul className='text-[rgba(0,0,0,0.6)] flex flex-col gap-[14px]'>
                            <li>
                                Free eBooks
                            </li>
                            <li>
                                Development Tutorial
                            </li>
                            <li>
                                How to - Blog
                            </li>
                            <li>
                                Youtube Playlist
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
