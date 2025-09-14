function Diagram({ Tasks, isOpen }) {
    let complate = Tasks.filter(item => item.Completed).length / Tasks.length * 100
    let uncompleted = Tasks.filter(item => !item.Completed).length / Tasks.length * 100
    return (
        <div className="absolute top-0 left-0 w-full h-screen backdrop-blur-[100px] z-[2] flex items-center flex-col justify-center gap-[50px]">
            <div className='flex max-w-[600px] w-[80%] justify-between text-[17px] tracking-[2px] font-[400]'>
                <div className='h-[300px] flex items-center flex-col gap-[10px] justify-end'>
                    <div className={`w-[50px] bg-green-500`} style={{height: `${complate}%`}}></div>
                    <h2 className=' text-green-300'>Completed</h2>
                    <p className=' text-green-500 text-[30px]'>{Math.floor(complate)}%</p>
                </div>
                <div className='h-[300px]  flex items-center flex-col gap-[10px] justify-end'>
                    <div className={`w-[50px] bg-red-600`} style={{height: `${uncompleted}%`}}></div>
                    <h2 className='text-red-300'>Uncompleted</h2>
                    <p className=' text-red-600 text-[30px]'>{Math.floor(uncompleted)}%</p>
                </div>
            </div>
            <div>
                <ul className='text-[18px] text-white font-[200]'>
                    <li>Sum: {Tasks.length}</li>
                    <li>Completed: {
                        Tasks.filter(item => item.Completed).length
                    }</li>
                    <li>Uncompleted: {
                        Tasks.filter(item => !item.Completed).length
                        }
                    </li>
                </ul>
            </div>
            <button onClick={isOpen} className='bg-black px-[10px] py-[5px] rounded text-white cursor-pointer'>Close</button>
        </div>
    )
}

export default Diagram
