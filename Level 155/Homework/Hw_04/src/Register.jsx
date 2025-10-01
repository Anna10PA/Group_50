import { useState } from 'react'
import Toast from './Toast'

function Register() {
    let [isOpen, setOpen] = useState({
        isOpen: false,
        isPasswordError: false,
        isValueError: false
    })

    let [values, setValues] = useState({
        Name: '',
        Password: '',
        Confirm: ''
    })

    let changeValue = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex h-screen w-full items-center justify-center bg-gray-950'>
            <form
                className='bg-white px-[35px] py-[40px] rounded flex flex-col items-center gap-5 w-[380px] pb-[40px]'
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(values)

                    if (values.Password.trim() === '' || values.Confirm.trim() === '') {
                        setOpen({ isOpen: true, isPasswordError: false, isValueError: true })
                    } else if (values.Password.trim() !== values.Confirm.trim()) {
                        setOpen({ isOpen: true, isPasswordError: true, isValueError: false })
                    } else {
                        setOpen({ isOpen: true, isPasswordError: false, isValueError: false })
                    }
                }}
            >
                <h1 className='text-[30px] font-[800] tracking-[2px] text-gray-950'>
                    Registration
                </h1>

                {/* Task 01 - Name */}
                <div className='relative max-w-[300px] min-w-[250px] w-[100%]'>
                    <input
                        type='text'
                        id='Name'
                        placeholder=' '
                        name='Name'
                        value={values.Name}
                        onChange={changeValue}
                        className='peer block w-full rounded border border-gray-300 px-3 pt-5 pb-3 text-gray-900 focus:border-blue-500 focus:outline-none'
                    />
                    <label
                        htmlFor='Name'
                        className='absolute left-3 top-2 text-gray-500 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-[12px] peer-focus:tracking-[1px] peer-focus:text-blue-500'
                    >
                        Name
                    </label>
                </div>
                <p
                    className={`${values.Name.trim().length < 10 ? 'text-red-600' : 'text-[#0f0]'
                        } tracking-[1px] h-[10px] relative top-[-10px]`}
                >
                    {values.Name.trim().length < 10 && values.Name.trim() !== ''
                        ? 'name must have at least 10 chars'
                        : values.Name.trim() === ''
                            ? ''
                            : 'Good'}
                </p>

                {/* Task 02 - Password */}
                <div className='relative max-w-[300px] min-w-[250px] w-[100%]'>
                    <input
                        type='password'
                        id='password'
                        placeholder=' '
                        name='Password'
                        value={values.Password}
                        onChange={changeValue}
                        className='peer block w-full rounded border border-gray-300 px-3 pt-5 pb-3 text-gray-900 focus:border-blue-500  focus:outline-none'
                    />
                    <label
                        htmlFor='password'
                        className='absolute left-3 top-2 text-gray-500 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-[12px] peer-focus:tracking-[1px] peer-focus:text-blue-500'
                    >
                        Password
                    </label>
                </div>

                {/* Task 03 - Confirm */}
                <div className='relative max-w-[300px] min-w-[250px] w-[100%]'>
                    <input
                        type='password'
                        id='Confirm'
                        name='Confirm'
                        onChange={changeValue}
                        value={values.Confirm}
                        placeholder=' '
                        className='peer block w-full rounded border border-gray-300 px-3 pt-5 pb-3 text-gray-900 focus:border-blue-500 focus:outline-none'
                    />
                    <label
                        htmlFor='Confirm'
                        className='absolute left-3 top-2 text-gray-500 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-[12px] peer-focus:tracking-[1px] peer-focus:text-blue-500'
                    >
                        Confirm password
                    </label>
                </div>

                <button className='bg-green-500 px-5 py-2 rounded font-[700] tracking-[1px] cursor-pointer duration-100 hover:bg-[#0f0] mt-[15px]'>
                    Submit
                </button>
            </form>

            {
                isOpen.isOpen && isOpen.isPasswordError ?
                    <Toast
                    content='Password is not correct'
                    expiresIn={10000}
                    colors={{ background: 'rgb(255, 100, 100)', color: 'rgb(166, 0, 62)' }}
                    funct={setOpen}
                    />
                    :
                    isOpen.isOpen &&  isOpen.isValueError ?
                    <Toast
                    content='All input must have values'
                    expiresIn={10000}
                    colors={{ background: 'rgb(255, 100, 100)', color: 'rgb(166, 0, 62)' }}
                    funct={setOpen}
                    />
                    :
                    isOpen.isOpen ? <Toast
                    content='Good Job!'
                    expiresIn={10000}
                    colors={{ background: 'rgb(100, 255, 100)', color: 'rgb(0, 166, 62)' }}
                    funct={setOpen}
                    />
                    :
                    null
            
            }
        </div>
    )
}

export default Register
