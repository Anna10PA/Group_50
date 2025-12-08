import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    }
  })

  console.log(watch('email'))
  console.log(errors)
  return (
    <div className='flex flex-col items-start gap-7 border-l border-gray-200 px-[60px] py-[20px] max-w-[500px] max-md:px-[40px]'>
      <h1 className='font-bold text-[30px]'>Registration</h1>
      <form action="" className='flex items-start gap-5 flex-col' onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <div className='flex items-center relative w-full'>
          <i className="fa-solid fa-at text-[#F67F20] absolute left-[12px] top-[14px]"></i>
          <input type="email" className='border border-gray-300 rounded px-[40px] py-[8px] outline-none w-full' placeholder='Email Address'
            {...register('email', { required: 'Enter email' })
            } />
        </div>
        <p>{errors.email ? errors.password.email : ''}</p>
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
        <div className='flex items-center relative w-full'>
          <i className="fa-solid fa-lock text-[#F67F20] absolute left-[12px] top-[14px]"></i>
          <input type="password" className='border border-gray-300 rounded px-[40px] py-[8px] outline-none w-full' placeholder='Confirm Password' {...register('confirm_password', {
            required: 'Confirm password', minLength: {
              value: 8,
              message: 'Min length is 8'
            }
          })} />
        </div>
        <p>{errors.confirm_password ? errors.confirm_password.message : ''}</p>
        <h2 className='font-[600] max-md:text-[15px] leading-[20px]'>By signing below, you agree to the, <span className='text-[#F67F20]'>Team of use</span> and <span className='text-[#F67F20]'>privacy notice</span></h2>
        <button className='bg-[#F67F20] text-white font-bold px-[20px] rounded w-full py-[10px] cursor-pointer duration-200 hover:bg-orange-500'>Sign Up</button>
      </form>
      <h2 className='font-[600] text-center w-full'>Already have an account? <span className='text-[#F67F20] cursor-pointer'>Login</span></h2>
    </div>
  )
}

export default App
