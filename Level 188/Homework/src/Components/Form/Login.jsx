import { useForm } from 'react-hook-form'

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
    <div className='flex flex-col items-start gap-7 border-l border-gray-200 px-[60px] py-[20px] max-w-[500px] max-md:px-[40px]'>
      <h1 className='font-bold text-[30px]'>Welcome back!</h1>
      <form action="" className='flex items-start gap-5 flex-col w-full' onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <div className='flex items-center relative w-full'>
          <i className="fa-solid fa-at text-[#F67F20] absolute left-[12px] top-[14px]"></i>
          <input type="email" className='border border-gray-300 rounded px-[40px] py-[8px] outline-none w-full' placeholder='Email Address'
            {...register('email', { required: 'Enter email' })
            } />
        </div>
        <p>{errors.email ? errors.email.message : ''}</p>
        <div className='flex items-center relative w-full'>
          <i className="fa-solid fa-lock text-[#F67F20] absolute left-[12px] top-[14px]"></i>
          <input type="password" className='border border-gray-300 rounded px-[40px] py-[8px] outline-none w-full' placeholder='Password' {...register('password', {
            required: 'Enter password', minLength: {
              value: 8,
              message: 'Min length is 8'
            }
          })} />
        </div>
        <p>{errors.password ? errors.password.message : ''}</p>
        <h2 className='font-[600] max-md:text-[15px] leading-[20px] text-[#F67F20] text-right w-full'>Forgot password?</h2>
        <button className='bg-[#F67F20] text-white font-bold px-[20px] rounded w-full py-[10px] cursor-pointer duration-200 hover:bg-orange-500'>Login</button>
      </form>

      <div className='flex items-center justify-between w-full gap-[20px]'>
        <button className='flex items-center justify-center gap-[10px] border border-gray-300 px-10 py-2 rounded border-[2px] cursor-pointer '>
          <i class="fa-brands fa-google"></i>
          <span className='font-bold'>
            Google
          </span>
        </button>
        <button className='flex items-center justify-center gap-[10px] border border-gray-300 px-10 py-2 rounded border-[2px] cursor-pointer '>
          <i className="fa-brands fa-facebook-f text-[#3D6AD6]"></i>
          <span className='font-bold '>
            Facebook
          </span>
        </button>
        <button></button>
      </div>
    </div>
  )
}

export default Login
