import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="min-h-[80px] bg-[#102E4A] flex items-center justify-end px-[70px] max-md:px-[20px]">
            <Link to='/favorites'>
                <div className="relative ">
                    <i className="fa-solid fa-heart text-red-500 text-[35px]"></i>
                    
                </div>
            </Link>
        </header>
    )
}

export default Header
