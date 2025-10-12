import React from 'react'

function ContactUs() {
    return (
        <div className='bg-[url(/hero_bg.png)] h-[100vh] bg-no-repeat bg-center bg-cover flex items-center justify-center text-white gap-[10px] font-[600] tracking-[1px] flex-wrap pt-[130px] px-[40px]'>
            <div className='max-w-[400px] backdrop-blur-[4px] h-[300px] rounded-[5px] py-[30px] px-[20px] flex flex-col gap-[7px]'>
                <h1><i className="fa-solid fa-star text-yellow-400 text-[23px]"></i> Address: <span className='font-[400]'>Georgia, Tbilisi, Vazha-Pshavela Street N47 Delisi Metro </span></h1>
                <h1><i className="fa-solid fa-star text-yellow-400 text-[23px]"></i> Address: <span className='font-[400]'>Georgia, Tbilisi, Nadzaladevi Metro Station </span></h1>
                <h1 className='mt-[15px]'><i className="fa-solid fa-star text-yellow-400 text-[23px]"></i> Phone: <span className='font-[400]'>+995 595 ** ** ** </span></h1>
                <h1><i className="fa-solid fa-star text-yellow-400 text-[23px]"></i> Tel: <span className='font-[400]'>+322 239 ** ** </span></h1>
                <h1 className='mt-[15px]'><i className="fa-solid fa-star text-yellow-400 text-[23px]"></i> Facebook: <span className='font-[400]'> <a href="#" > CoffeeShop</a> </span></h1>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.7517063455057!2d44.742584984109044!3d41.725876390639776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731af1c91591%3A0xab872b019aedaa11!2z4YOT4YOU4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1760198885820!5m2!1ska!2sge" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-[5px]'></iframe>
        </div>
    )
}

export default ContactUs
