
function Card({ name, image, price, delProduct, id, edit, editId, setEdit }) {
    return (
        <div className='text-white p-3 bg-gray-900 w-full rounded max-h-min flex flex-col items-start gap-3'>
            <div className='h-10'>
                <p>{name}</p>
            </div>
            <img src={image ? `http://127.0.0.1:8000/${image}` : 'https://i.pinimg.com/736x/7d/53/fb/7d53fb50c17833e375d7957e32f4a6da.jpg'} alt="No Picture" className={`min-w-50 w-full h-50 object-cover`} />
            <div className='flex items-center justify-between w-full gap-5 flex-wrap'>
                <h2 className="text-green-500 text-2xl font-semibold flex items-center justify-between gap-1">
                    <span>{(price).toFixed(2)}</span>
                    <span>GEL</span></h2>
                <p className='text-gray-400 line-through flex items-center justify-between gap-0.5' >
                    <span>{(price * 2).toFixed(2)}</span> 
                    <span>GEL</span>
                </p>
            </div>
            <div className="flex items-center justify-between w-full gap-3">
                <button className='px-3 py-2 rounded bg-red-600 text-white duration-100 hover:bg-red-700 cursor-pointer' onClick={()=> {
                    delProduct(id)
                }}>Delete</button>
                <button className={`px-3 py-2 rounded ${!editId ? 'bg-orange-600 hover:bg-orange-700': 'hover:bg-gray-700 bg-gray-400'}  text-white duration-100 cursor-pointer`} onClick={()=> {
                    edit()
                    setEdit(editId ? null : id)
                }
                }>{!editId ? 'Edit': 'Cencel'}</button>
            </div>
        </div>
    )
}

export default Card 