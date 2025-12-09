import Registration from "./Registration"
import Login from "./Login"

function Form() {
    return (
        <main className='flex items-center flex-wrap-reverse gap-10 justify-center px-30 py-20 max-md:px-5 max-md:gap-3 max-md:py-15'>
            <img src="/image.png" alt="" />
            <Login />
        </main>
    )
}

export default Form
