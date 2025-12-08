/*
შექმენი ფორმა react hook form-ის გამოყენებით, გამოიყენე watch() ფუნქცია რისი საშუალებითაც საიტზე გამოიტან შეყვანილ ინფორმაციას და ასევე დაამატე  მინიმალური ვალიდაციები

 */


import { useForm } from 'react-hook-form'

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      email: 'idk@email.com',
      password: '123'
    }
  })

  console.log(watch())

  return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
      <input type="email" {...register('email', { required: 'Enter email' })} />
      <p>{errors.email ? errors.email.message : ''}</p>
      <input type="password" {...register('password', {
        required: 'Enter password', minLength: {
          value: 4,
          message: 'Min length is 4'
        }
      },)} />
      <p>{errors.password ? errors.password.message : ''}</p>
      <button type='submit'>submit</button>
    </form>
  )
}

export default App
