import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  console.log(watch('email'))
  console.log(errors)
  return (
    <div className='flex w-full flex-col items-start gap-7 border-l border-gray-200 px-[60px] py-5 max-w-[500px] max-md:px-10'>
      <h1 className='font-bold text-[30px]'>Welcome back!</h1>
      <form action="" className='flex items-start gap-5 flex-col w-full' onSubmit={handleSubmit((data) => {
        console.log(data)

      })}>
        <div className='flex items-start gap-2 relative w-full flex-col'>
          <div className='flex items-center relative w-full'>
            <i className="fa-solid fa-at text-[#F67F20] absolute left-3 top-3.5"></i>
            <input type="email" className='border border-gray-300 rounded px-10 py-2 outline-none w-full' placeholder='Email Address'
              {...register('email', { required: 'Enter email' })
              } />
          </div>
          <p className='text-[red] font-semibold'>{errors.email ? errors.email.message : ''}</p>
        </div>
        <div className='flex items-start gap-2 relative w-full flex-col'>
          <div className='flex items-center relative w-full'>
            <i className="fa-solid fa-lock text-[#F67F20] absolute left-3 top-3.5"></i>
            <input type="password" className='border border-gray-300 rounded px-10 py-2 outline-none w-full' placeholder='Password' {...register('password', {
              required: 'Enter password', minLength: {
                value: 8,
                message: 'Min length is 8'
              }
            })} />
          </div>
          <p className='text-[red] font-semibold'>{errors.password ? errors.password.message : ''}</p>
        </div>
        <h2 className='font-semibold max-md:text-[15px] leading-5 text-[#F67F20] text-right w-full'>Forgot password?</h2>
        <button className='bg-[#F67F20] text-white font-bold px-5 rounded w-full py-2.5 cursor-pointer duration-200 hover:bg-orange-500'>Login</button>
      </form>

      <div className='flex items-center justify-between w-full gap-5'>
        <button className='flex items-center justify-center gap-2.5 border-gray-300 px-10 py-2 rounded border-2 cursor-pointer '>
          <img src="https://tse3.mm.bing.net/th/id/OIP.FlHYuH8JYbUrdZqBaTQWWQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-5' />
          <span className='font-bold'>
            Google
          </span>
        </button>
        <button className='flex items-center justify-center gap-2.5 border-gray-300 px-10 py-2 rounded border-2 cursor-pointer '>
          <i className="fa-brands fa-facebook-f text-[#3D6AD6]"></i>
          <span className='font-bold '>
            Facebook
          </span>
        </button>
      </div>
      <h2 className='font-semibold text-center w-full'>Don't you have a account?
        <Link to='/registration'>
          <span className='text-[#F67F20] cursor-pointer'> Sign Up</span>
        </Link>
      </h2>
    </div>
  )
}

export default Login
