function Element({ Task, Title, mood, taskIndex, allTasks, update }) {
    // delete Tasks
    let deleteTasks = () => {
        let newArr = allTasks.filter((_, index) => index !== taskIndex)
        update(newArr)
    }

    // complate/uncomplated tasks
    let check = () => {
        let newArr = allTasks.map((item, index) =>
            index === taskIndex ? {...item , Completed: !item.Completed} : item
        )
        update(newArr)
    }
    let isCompletedtask = allTasks[taskIndex].Completed
    return (
        <li className={`border rounded w-full flex justify-between px-[20px] py-[10px] flex-col max-h-[max-content] ${mood === 'Happy' ? 'bg-blue-300   hover:bg-blue-200 accent-blue-600' :
                mood === 'Lovely' ? 'bg-red-300    hover:bg-red-200 accent-red-600' :
                    mood === 'Normal' ? 'bg-green-300  hover:bg-green-200 accent-green-600' :
                        mood === 'Think' ? 'bg-yellow-200 hover:bg-yellow-100 accent-yellow-500' :
                            mood === 'Sad' ? 'bg-gray-300   hover:bg-gray-200 accent-gray-600' :
                                mood === 'Scary' ? 'bg-orange-300 hover:bg-orange-200 accent-orange-600' :
                                    ''
            } duration-200`}>
            <div className='flex justify-between items-center'>
                <span className='font-[700] w-[80%] text-[18px] break-words'>
                    {Title.trim()[0].toUpperCase() + Title.trim().slice(1).toLowerCase()}
                </span>
                <span className='text-[25px]'>
                    {
                        mood === 'Happy' ? '😊' :
                            mood === 'Lovely' ? '💝' :
                                mood === 'Normal' ? '🙂' :
                                    mood === 'Think' ? '🤔' :
                                        mood === 'Sad' ? '😢' :
                                            mood === 'Scary' ? '😓' :
                                                ''
                    }
                </span>
            </div>
            <span className='font-[500] opacity-[70%] break-words'>
                {Task.trim()[0].toUpperCase() + Task.trim().slice(1).toLowerCase()}
            </span>
            <div className='flex gap-[10px] items-center mt-[10px]'>
                <button className='text-[20px] cursor-pointer' >🖋️</button>
                <button className='text-[20px] cursor-pointer' onClick={() => {
                    deleteTasks()
                }}>🗑️</button>
                <input type="checkbox" className='size-[18px] mt-[1px] cursor-pointer' onChange={check} checked={isCompletedtask} />
            </div>
        </li>

    )
}

export default Element
