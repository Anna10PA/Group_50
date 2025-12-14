import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Registration() {

  let allUsers = JSON.parse(localStorage.getItem('All_users')) || []

  const {
    register,
    handleSubmit,
    watch, formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    }
  })

  console.log(watch('email'))
  console.log(errors)

  return (
    <div className='flex flex-col items-start w-full gap-7 border-l border-gray-200 px-[60px] py-5 max-w-[500px] max-md:px-10'>

      <h1 className='font-bold text-[30px]'>Registration</h1>

      <form className='flex items-start gap-5 flex-col' onSubmit={handleSubmit((data) => {
        const newUser = {
          email: data.email,
          password: data.password
        }
        console.log(data)
        localStorage.setItem('All_users', JSON.stringify([...allUsers, newUser]))
        console.log('Sucsess')
      })}>

        <div className='w-full flex items-start flex-col gap-2'>
          <div className='flex items-center relative w-full'>
            <i className="fa-solid fa-at text-[#F67F20] absolute left-3 top-3.5"></i>
            <input type="email" className={`border border-gray-300 rounded px-10 py-2 outline-none w-full ${!errors.email ? 'border-gray-300' : 'border-red-600'}`} placeholder='Email Address'
              {...register('email', {
                required: 'Enter email',
                minLength: {
                  value: 1,
                  message: "Must Contain @"
                }
              })
              } />
          </div>
          <p className='text-[red] font-semibold'>{errors.email ? errors.email.message : ''}</p>
        </div>

        <div className='w-full flex items-start flex-col gap-2'>
          <div className='flex items-center relative w-full'>
            <i className="fa-solid fa-lock text-[#F67F20] absolute left-3 top-3.5"></i>
            <input type="password" className={`border border-gray-300 rounded px-10 py-2 outline-none w-full ${!errors.email ? 'border-gray-300' : 'border-red-600'}`} placeholder='Password' {...register('password', {
              required: 'Enter password',
              minLength: {
                value: 8,
                message: 'Min length is 8'
              }
            })} />
          </div>
          <p className='text-[red] font-semibold'>{errors.password ? errors.password.message : ''}</p>
        </div>

        <div className='w-full flex items-start flex-col gap-2'>
          <div className='flex items-center relative w-full'>
            <i className="fa-solid fa-lock text-[#F67F20] absolute left-3 top-3.5"></i>
            <input type="password" className={`border border-gray-300 rounded px-10 py-2 outline-none w-full ${!errors.email ? 'border-gray-300' : 'border-red-600'}`} placeholder='Confirm Password' {...register('confirm_password', {
              required: 'Confirm password',
              minLength: {
                value: 8,
                message: 'Min length is 8'
              },
              validate: (v) => {
                return v === watch('password') || "Passwords do not match"
              }
            })} />
          </div>
          <p className='text-[red] font-semibold'>{errors.confirm_password ? errors.confirm_password.message : ''}</p>
        </div>
        <h2 className='font-semibold max-md:text-[15px] leading-5'>By signing below, you agree to the, <span className='text-[#F67F20]'>Team of use</span> and <span className='text-[#F67F20]'>privacy notice</span></h2>
        <button className='bg-[#F67F20] text-white font-bold px-5 rounded w-full py-2.5 cursor-pointer duration-200 hover:bg-orange-500'>Sign Up</button>
      </form>

      <h2 className='font-semibold text-center w-full'>Already have an account?
        <Link to='/'>
          <span className='text-[#F67F20] cursor-pointer'> Login</span>
        </Link>
      </h2>
    </div>
  )
}

export default Registration
