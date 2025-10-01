// https://api.github.com/users/{username}
function App() {
  return (
    <div className='bg-[#141c2f] w-full h-screen flex items-center justify-center'>

      {/* main div */}
      <div className="min-w-[300px] max-w-[650px] w-[50%] flex flex-col gap-[30px]">

        {/* header */}
        <div className='flex w-full items-center justify-between'>
          <h1 className='font-Inconsolata text-white text-[30px]
        font-[600] tracking-[3px]'>devfinder</h1>
          <div className='flex items-center gap-[20px] text-white font-bold'>
            L i g h t
            <i className="fa-solid fa-sun text-white text-[20px] mt-[4px]"></i>
          </div>
        </div>

        {/* search */}
        <div className='bg-[#1f2a48] font-Inconsolata flex items-center gap-[20px] justify-between rounded-[10px] px-[10px] py-[10px] pl-[30px]'>
          <div className="flex items-center gap-[25px] w-full">
            <i className="fa-solid fa-magnifying-glass text-blue-600 text-[25px]"></i>
            <input type="text" className='outline-none text-white tracking-[2px] placeholder:text-white w-full' placeholder='Search github Username' />
          </div>
          <button className='bg-[#0079fe] px-[15px] py-[10px] text-white rounded-[8px] cursor-pointer duration-200 hover:bg-blue-700'>Search</button>
        </div>

        {/* main */}
        <div className="bg-[#1f2a48] rounded-[10px] text-white flex justify-between px-[40px] py-[40px] gap-[40px]">
          <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" className='w-[100px] h-[100px] rounded-full' />
          <div className='w-full flex flex-col gap-[20px]'>
            <div className="flex flex-col">
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-[35px] font-[700] tracking-[2px]'>Name</h1>
                <p className='font-[300] tracking-[2px]'>Date</p>
              </div>
            <p className='text-[#0177f9] font-[500]'>Username</p>
            </div>
            <p className='text-gray-200'>Bio</p>

            {/* infos */}
            <div className="flex w-full justify-between bg-[#141c2f] px-[20px] py-[10px] rounded-[10px]">
              <div>
                <p className='text-[#e3e5e7] font-[300]'>Repos</p>
                <h1 className='text-white text-[25px] font-[700]'>8</h1>
              </div>
              <div>
                <p className='text-[#e3e5e7] font-[300]'>Followers</p>
                <h1 className='text-white text-[25px] font-[700]'>3938</h1>
              </div>
              <div>
                <p className='text-[#e3e5e7] font-[300]'>Following</p>
                <h1 className='text-white text-[25px] font-[700]'>9</h1>
              </div>
            </div>
            {/* links */}
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
              <a href="">link1</a>
              <a href="">link2</a>
              <a href="">link3</a>
              <a href="">link4</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App
