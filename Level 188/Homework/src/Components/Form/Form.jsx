import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "./Login"
import Registration from "./Registration"

function Form() {

    return (
        <BrowserRouter>
            <main className='flex items-center flex-wrap-reverse gap-10 justify-center px-30 py-20 max-md:px-5 max-md:gap-3 max-md:py-15'>
                <video muted loop autoPlay >
                    <source src="/generated_video.mp4" type="video/mp4" />
                </video>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Form
