function MainCard({ user }) {
    console.log(user)
    return (
        <>
            {/* main */}
            <div className="bg-[#1f2a48] rounded-[10px] text-white flex justify-between px-[40px] py-[40px] gap-[40px]">
                <img src={user.avatar_url} className='w-[100px] h-[100px] rounded-full' />
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className="flex flex-col">
                        <div className='w-full flex justify-between items-center'>
                            <h1 className='text-[35px] font-[700] tracking-[2px]'>{user.name}</h1>
                            <p className='font-[300] tracking-[2px]'>{user.created_at
                            }</p>
                        </div>
                        <p className='text-[#0177f9] font-[500]'>{user.login}</p>
                    </div>
                    <p>{!user.bio ? 'No bio' : user.bio}</p>

                    {/* infos */}
                    <div className="flex w-full justify-between bg-[#141c2f] px-[20px] py-[10px] rounded-[10px]">
                        <div>
                            <p className='text-[#e3e5e7] font-[300]'>Repos</p>
                            <h1 className='text-white text-[25px] font-[700]'>{user.public_repos}</h1>
                        </div>
                        <div>
                            <p className='text-[#e3e5e7] font-[300]'>Followers</p>
                            <h1 className='text-white text-[25px] font-[700]'>{user.followers}</h1>
                        </div>
                        <div>
                            <p className='text-[#e3e5e7] font-[300]'>Following</p>
                            <h1 className='text-white text-[25px] font-[700]'>{user.following}</h1>
                        </div>
                    </div>
                    {/* links */}
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
                        <a href={user.location}>Ordanizations</a>
                        <a href={user.html_url}>link2</a>
                        <a href="">link3</a>
                        <a href="">link4</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainCard
