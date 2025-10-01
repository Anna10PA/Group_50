function MainCard({ user }) {
    console.log(user)
    let date = new Date(user.created_at)
    return (
        <>
            {/* main */}
            <div className="bg-[#1f2a48] rounded-[10px] text-white flex justify-between px-[40px] py-[40px] gap-[40px] max-sm:px-[15px] max-sm:py-[10px]">
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className='flex items-center gap-[30px]'>
                        <img src={user.avatar_url} className='w-[100px] h-[100px] rounded-full' />
                        <div className='flex flex-col'>
                            <div className="flex flex-col">
                                <div className='w-full flex justify-between items-center gap-[20px] max-md:flex-col max-md:gap-[5px] max-md:justify-start max-md:items-start'>
                                    <h1 className={`text-[32px] font-[700] tracking-[2px] ${!user.name ? 'text-gray-400' : 'text-white'} max-sm:text-[20px]`}>{user.name ? user.name : 'None'}</h1>
                                    <p className='font-[300] tracking-[2px]'>Joined {date.toDateString()}</p>
                                </div>
                                <p className='text-[#0177f9] font-[500]'>{user.login}</p>
                            </div>
                        </div>
                    </div>
                    {/* infos */}
                    <div className="flex gap-[45px]">
                        <div className="w-[100px] max-md:hidden">

                        </div>
                        <div className='flex flex-col w-full gap-[20px]'>
                            <p className={`${!user.bio ? 'text-gray-400' : 'text-white'}`}>{!user.bio ? 'No bio' : user.bio}</p>


                            <div className="flex w-full justify-between bg-[#141c2f] px-[20px] py-[10px] rounded-[10px]">
                                <div>
                                    <p className='text-[#e3e5e7] font-[500]'>Repos</p>
                                    <h1 className='text-white text-[25px] font-[700]'>{user.public_repos}</h1>
                                </div>
                                <div>
                                    <p className='text-[#e3e5e7] font-[500]'>Followers</p>
                                    <h1 className='text-white text-[25px] font-[700]'>{user.followers}</h1>
                                </div>
                                <div>
                                    <p className='text-[#e3e5e7] font-[500]'>Following</p>
                                    <h1 className='text-white text-[25px] font-[700]'>{user.following}</h1>
                                </div>
                            </div>
                            {/* links */}
                            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[15px]'>
                                <a href={user.location} className={`${!user.location ? 'text-gray-500' : 'text-white'} flex items-center gap-[10px] font-[600] tracking-[1px] max-sm:text-[15px]`}>
                                    <i className="fa-solid fa-location-dot text-[23px] max-sm:text-[17px]"></i>
                                    {!user.location ? 'Not Available' : user.location}
                                </a>
                                <a href={user.twitter_username} className={`${!user.twitter_username ? 'text-gray-500' : 'text-white'} flex items-center gap-[10px] font-[600] tracking-[1px] max-sm:text-[15px]`}>
                                    <i className="fa-brands fa-twitter text-[23px] max-sm:text-[17px]"></i>
                                    {!user.twitter_username ? 'Not Available' : user.twitter_username}
                                </a>
                                <a href={user.html_url} className={`${!user.html_url ? 'text-gray-500' : 'text-white'} flex items-center gap-[10px] font-[600] tracking-[1px] max-sm:text-[15px]`}>
                                    <i className="fa-solid fa-link text-[23px] max-sm:text-[17px]"></i>
                                    {!user.html_url ? 'Not Available' : `${user.html_url.split('.')[0]}.com`}
                                </a>
                                <a href={user.company} className={`${!user.company ? 'text-gray-500' : 'text-white'} flex items-center gap-[10px] font-[600] tracking-[1px] max-sm:text-[15px]`}>
                                    <i className="fa-solid fa-building text-[23px] max-sm:text-[17px]"></i>
                                    {!user.company ? 'Not Available' : user.company}
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCard
